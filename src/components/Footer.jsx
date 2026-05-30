import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h3>
        Imtiyaz Haider
      </h3>

      <p>
        Software Developer • AI Enthusiast • Problem Solver
      </p>

      <div className="footer-icons">

        <a
          href="https://github.com/imtiyazhaiider"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:imtiyazhaider11@gmail.com"
        >
          <FaEnvelope />
        </a>

      </div>

      <p>
        © 2026 Imtiyaz Haider.
        All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;