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
            {show.name && current.name && (
              <h2>
                {current.name.preferred ||
                  current.name.first + " " + current.name.last}
              </h2>
            )}

            {show.mascot && current.mascot && (
              <p>
                <strong>Mascot:</strong> {current.mascot}
              </p>
            )}

            {show.image && current.media?.src && (
              <img
                src={current.media.src}
                alt="student"
                className="headshot"
              />
            )}

            {show.statement && current.personalStatement && (
              <p>
                <strong>Statement:</strong> {current.personalStatement}
              </p>
            )}

            {show.backgrounds && current.backgrounds && (
              <>
                {current.backgrounds.personal && (
                  <p>
                    <strong>Personal:</strong> {current.backgrounds.personal}
                  </p>
                )}
                {current.backgrounds.academic && (
                  <p>
                    <strong>Academic:</strong> {current.backgrounds.academic}
                  </p>
                )}
                {current.backgrounds.professional && (
                  <p>
                    <strong>Professional:</strong>{" "}
                    {current.backgrounds.professional}
                  </p>
                )}
              </>
            )}

            {show.classes && current.courses?.length > 0 && (
              <div>
                <strong>Classes:</strong>
                <ul>
                  {current.courses.map((c, i) => (
                    <li key={i}>
                      {c.dept} {c.num} — {c.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {show.extra && (
              <>
                {current.funFact && (
                  <p>
                    <strong>Fun Fact:</strong> {current.funFact}
                  </p>
                )}
                {current.platform && (
                  <p>
                    <strong>Computer:</strong> {current.platform.device} (
                    {current.platform.os})
                  </p>
                )}
              </>
            )}

            {show.quote && current.quote?.text && (
              <blockquote>"{current.quote.text}"</blockquote>
            )}

            {show.links && current.links && (
              <div>
                <strong>Links:</strong>
                <ul>
                  {current.links.charlotte && (
                    <li>
                      <a href={current.links.charlotte}>CLT Webpage</a>
                    </li>
                  )}
                  {current.links.github && (
                    <li>
                      <a href={current.links.github}>GitHub</a>
                    </li>
                  )}
                  {current.links.githubio && (
                    <li>
                      <a href={current.links.githubio}>GitHub Pages</a>
                    </li>
                  )}
                  {current.links.itis3135 && (
                    <li>
                      <a href={current.links.itis3135}>ITIS 3135 Page</a>
                    </li>
                  )}
                  {current.links.freecodecamp && (
                    <li>
                      <a href={current.links.freecodecamp}>FreeCodeCamp</a>
                    </li>
                  )}
                  {current.links.codecademy && (
                    <li>
                      <a href={current.links.codecademy}>Codecademy</a>
                    </li>
                  )}
                  {current.links.linkedin && (
                    <li>
                      <a href={current.links.linkedin}>LinkedIn</a>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </>
      )}

      {filtered.length === 0 && <p>No students match your search.</p>}
    </main>
  );
}






