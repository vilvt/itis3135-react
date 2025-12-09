import { useEffect, useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [index, setIndex] = useState(0);

  // Checkbox state
  const [show, setShow] = useState({
    name: true,
    mascot: true,
    image: true,
    statement: true,
    backgrounds: true,
    classes: true,
    extra: true,
    quote: true,
    links: true,
  });

  useEffect(() => {
    fetch("/students.json")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  // Search by first or last name
  const filtered = students.filter((s) => {
    const first = s.name?.first?.toLowerCase() || "";
    const last = s.name?.last?.toLowerCase() || "";
    const full = first + " " + last;
    return full.includes(searchTerm.toLowerCase());
  });

  // Slideshow student
  const current = filtered[index] || null;

  const next = () => setIndex((prev) => (prev + 1) % filtered.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + filtered.length) % filtered.length);

  return (
    <main className="wrap">
      <h1>Student Viewer</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setIndex(0);
        }}
        style={{ padding: "0.5rem", width: "100%", maxWidth: "400px" }}
      />

      {/* Counter */}
      <p>
        <strong>{filtered.length}</strong> student(s) found.
      </p>

      {/* Checkboxes */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {Object.keys(show).map((key) => (
          <label key={key}>
            <input
              type="checkbox"
              checked={show[key]}
              onChange={() => setShow({ ...show, [key]: !show[key] })}
            />
            {" " + key.charAt(0).toUpperCase() + key.slice(1)}
          </label>
        ))}
      </div>

      <hr />

      {/* Slideshow Controls */}
      {filtered.length > 0 && (
        <>
          <button onClick={prev}>Previous</button>
          <button onClick={next} style={{ marginLeft: "1rem" }}>
            Next
          </button>

          <div className="card">
  {/* Header */}
  {current.name && (
    <h2>
      {current.name.preferred || current.name.first + " " + current.name.last}{" "}
      {current.mascot && <>| {current.mascot}</>}
    </h2>
  )}

  {/* Image */}
  {current.media?.src && (
    <>
      <img src={current.media.src} alt="student" className="headshot" />
      {current.media.caption && (
        <p style={{ fontStyle: "italic", textAlign: "center" }}>
          {current.media.caption}
        </p>
      )}
    </>
  )}

  {/* Personal Statement */}
  {current.personalStatement && <p>{current.personalStatement}</p>}

  {/* Backgrounds */}
  {current.backgrounds && (
    <>
      {current.backgrounds.personal && (
        <p>
          <strong>Personal Background:</strong> {current.backgrounds.personal}
        </p>
      )}
      {current.backgrounds.professional && (
        <p>
          <strong>Professional Background:</strong>{" "}
          {current.backgrounds.professional}
        </p>
      )}
      {current.backgrounds.academic && (
        <p>
          <strong>Academic Background:</strong> {current.backgrounds.academic}
        </p>
      )}
      {current.backgrounds.subject && (
        <p>
          <strong>Subject Background:</strong> {current.backgrounds.subject}
        </p>
      )}
    </>
  )}

  {/* Courses */}
  {current.courses?.length > 0 && (
    <div>
      <strong>Courses & Reason Why Taking:</strong>
      <ul>
        {current.courses.map((c, i) => (
          <li key={i}>
            {c.dept} {c.num} - {c.name} {c.reason && `- ${c.reason}`}
          </li>
        ))}
      </ul>
    </div>
  )}

  {/* Computer Info */}
  {current.platform && (
    <>
      {current.platform.device && (
        <p>
          <strong>Computer Type:</strong> {current.platform.device}
        </p>
      )}
      {current.platform.os && (
        <p>
          <strong>Operating System:</strong> {current.platform.os}
        </p>
      )}
    </>
  )}

  {/* Fun Fact */}
  {current.funFact && (
    <p>
      <strong>Fun Fact:</strong> {current.funFact}
    </p>
  )}

  {/* Quote */}
  {current.quote?.text && (
    <blockquote>
      "{current.quote.text}"
      {current.quote.author && <br />}
      {current.quote.author && <>- {current.quote.author}</>}
    </blockquote>
  )}

  {/* Links */}
  {current.links && (
    <p>
      {[
        { name: " CLT Web", url: current.links.charlotte },
        { name: " GitHub.io", url: current.links.githubio },
        { name: " GitHub", url: current.links.github },
        { name: " ITIS 3135", url: current.links.itis3135 },
        { name: " freeCodeCamp", url: current.links.freecodecamp },
        { name: " Codecademy", url: current.links.codecademy },
        { name: " LinkedIn", url: current.links.linkedin },
      ]
        .filter((l) => l.url)
        .map((l, i) => (
          <span key={i}>
            <a href={l.url}>{l.name}</a> {i < 6 ? "|" : ""}
          </span>
        ))}
    </p>
  )}
</div>

        </>
      )}

      {filtered.length === 0 && <p>No students match your search.</p>}
    </main>
  );
}






