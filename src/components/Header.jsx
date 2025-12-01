import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Saige Hatfield | ITIS 3135</h1>
      <nav>
        {/* Primary Nav: only 3 pages per assignment instructions */}
        <Link to="/">Home</Link> ~{" "}
        <Link to="/introduction">Introduction</Link> ~{" "}
        <Link to="/contract">Contract</Link> ~{" "}
        <Link to="/students">Students</Link>
      </nav>

      {/* Optional: Secondary Nav (can keep it for consistency) */}
      <nav>
        <a href="sage-hummingbird/about.html">Sage Hummingbird Company</a> ~{" "}
        <a href="stuff/CRAP FEST!.htm">Crappy ˚ʚ♡ɞ˚ Website</a> ~{" "}
        <a href="website_evaluations.html">Website Evaluations</a> ~{" "}
        <a href="fccfsjs_outline.html">freeCodeCamp Javascript Outline</a> ~{" "}
        <a href="hobby/index.html">Hobby Site</a> ~{" "}
        <a href="intro_form/index.html">Intro Form</a> ~{" "}
        <a href="project_overview/index.html">Project Overview</a>
      </nav>
    </header>
  );
}
