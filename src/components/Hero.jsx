import profileImage from "../assets/images/profile.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <p className="hero-greeting">
          Hello, I'm
        </p>

        <h1 className="hero-name">
          Imtiyaz Haider
        </h1>

        <h2 className="hero-title">
          Software Developer | AI Enthusiast | Problem Solver
        </h2>

        <p className="hero-description">
          I build web applications, explore artificial
          intelligence, and create software solutions
          that solve real-world problems.

          Currently pursuing Computer Science Engineering
          while expanding my expertise in Full Stack
          Development and AI.
        </p>

        <div className="hero-buttons">

          <a
            href="#projects"
            className="btn-primary"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="btn-secondary"
          >
            Download Resume
          </a>

          <a
            href="https://github.com/imtiyazhaiider"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            GitHub
          </a>

        </div>

      </div>

      <div className="hero-image">

        <div className="profile-circle">

          <img
            src={profileImage}
            alt="Imtiyaz Haider"
            className="profile-image"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;