import { useEffect, useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dvonb.xyz/api/2025-fall/itis-3135/students")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading students:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading students...</p>;

  return (
    <main style={{ padding: "1rem" }}>
      <h1>Student Introductions</h1>

      {students.map((student) => (
        <div
          key={student.email}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1rem",
            marginBottom: "1rem",
            background: "#fafafa",
          }}
        >
          <h2>{student.name}</h2>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Major:</strong> {student.major}</p>
          <p><strong>Description:</strong> {student.description}</p>

          {student.icon && (
            <img 
              src={student.icon} 
              alt="student icon"
              width="100"
              style={{ marginTop: "10px" }}
            />
          )}
        </div>
      ))}
    </main>
  );
}
