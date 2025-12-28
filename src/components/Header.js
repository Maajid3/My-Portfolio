import "./components.css";
import Resume from "../MaajidResume.pdf";

export default function Headers() {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href={Resume} target="_blank" rel="noopener noreferrer">
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
