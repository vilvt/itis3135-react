import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Saige Hatfield | ITIS 3135</h1>
      <nav>
        {/* Primary Nav */}
        <Link to="/">Home</Link> ~{" "}
        <Link to="/introduction">Introduction</Link> ~{" "}
        <Link to="/contract">Contract</Link> ~{" "}
        <Link to="/students">Students</Link>
      </nav>
    </header>
  );
}
