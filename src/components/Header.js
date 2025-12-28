import "./components.css";

export default function Headers() {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="/MaajidResume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}
