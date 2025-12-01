import { useEffect, useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/students.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading students:", err);
        setError("Failed to load student data.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading students...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main style={{ padding: "1rem" }}>
      <h1>Student Introductions</h1>

      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        students.map((student) => (
          <div
            key={student.email || student.name}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              marginBottom: "1rem",
              background: "#fafafa",
            }}
          >
            <h2>{student.name || "Unnamed Student"}</h2>
            {student.email && <p><strong>Email:</strong> {student.email}</p>}
            {student.major && <p><strong>Major:</strong> {student.major}</p>}
            {student.description && <p><strong>Description:</strong> {student.description}</p>}

            {student.icon ? (
              <img
                src={student.icon}
                alt={`${student.name || "student"} icon`}
                width="100"
                style={{ marginTop: "10px" }}
              />
            ) : null}
          </div>
        ))
      )}
    </main>
  );
}



