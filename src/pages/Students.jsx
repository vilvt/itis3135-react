import { useEffect, useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/students.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setStudents(data); // data is an array
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
  if (students.length === 0) return <p>No students found.</p>;

  return (
    <main style={{ padding: "1rem" }}>
      <h1>Student Introductions</h1>

      {students.map((student) => {
        const fullName =
          student.name.preferred ||
          student.name.first + " " +
          (student.name.middleInitial ? student.name.middleInitial + " " : "") +
          student.name.last;

        return (
          <div
            key={student.prefix}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              marginBottom: "1rem",
              background: "#fafafa",
            }}
          >
            <h2>{fullName}</h2>

            {student.prefix && <p><strong>Email:</strong> {student.prefix}@uncc.edu</p>}

            {student.backgrounds?.personal && <p><strong>Personal:</strong> {student.backgrounds.personal}</p>}
            {student.backgrounds?.academic && <p><strong>Academic:</strong> {student.backgrounds.academic}</p>}
            {student.backgrounds?.professional && <p><strong>Professional:</strong> {student.backgrounds.professional}</p>}

            {student.personalStatement && <p><strong>Statement:</strong> {student.personalStatement}</p>}

            {student.courses?.length > 0 && (
              <div>
                <strong>Courses:</strong>
                <ul>
                  {student.courses.map((course, index) => (
                    <li key={index}>
                      {course.dept} {course.num} - {course.name} ({course.reason})
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {student.funFact && <p><strong>Fun Fact:</strong> {student.funFact}</p>}

            {student.media?.hasImage && student.media.src && (
              <img
                src={student.media.src} // must exist in public folder
                alt={`${student.name.first} ${student.name.last}`}
                width="100"
                style={{ marginTop: "10px" }}
              />
            )}

            {student.quote?.text && (
              <blockquote>
                "{student.quote.text}" — {student.quote.author || "Unknown"}
              </blockquote>
            )}
          </div>
        );
      })}
    </main>
  );
}





