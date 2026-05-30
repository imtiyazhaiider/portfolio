import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        Imtiyaz
      </div>

      {/* Desktop Menu */}

      <ul className="nav-links">

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#journey">Journey</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

      <div className="nav-buttons">

        <a
          href="/resume.pdf"
          download
          className="resume-btn"
        >
          Resume
        </a>

        <a
          href="https://github.com/imtiyazhaiider"
          target="_blank"
          rel="noreferrer"
          className="github-btn"
        >
          GitHub
        </a>

      </div>

      {/* Mobile Icon */}

      <div
        className="mobile-menu-icon"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        {menuOpen ? (
          <FaTimes />
        ) : (
          <FaBars />
        )}
      </div>

      {/* Mobile Menu */}

      <div
        className={`mobile-menu ${
          menuOpen ? "active" : ""
        }`}
      >

        <a
          href="#about"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          About
        </a>

        <a
          href="#skills"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Skills
        </a>

        <a
          href="#projects"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Projects
        </a>

        <a
          href="#journey"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Journey
        </a>

        <a
          href="#contact"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Contact
        </a>

        <a
          href="/resume.pdf"
          download
          className="mobile-resume"
        >
          Resume
        </a>

        <a
          href="https://github.com/imtiyazhaiider"
          target="_blank"
          rel="noreferrer"
          className="mobile-github"
        >
          GitHub
        </a>

      </div>

    </nav>
  );
}

export default Navbar;