import poetryImage from "../assets/images/projects/poetry-website.png";

function Projects() {
  const projects = [
    {
      title: "Poetry Website",

      description:
        "A platform where users can read poems, ghazals, nazms and sher in a clean and modern interface.",

      tech: [
        "Django",
        "HTML",
        "CSS",
        "JavaScript",
      ],

      github:
        "https://github.com/imtiyazhaiider/sukhan-poetry",

      live:
        "https://sukhan-6889.onrender.com",

      image: poetryImage,
    },
  ];

  return (
    <section
      id="projects"
      className="projects"
    >
      <div className="section-title">
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
          >
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((item, idx) => (
                <span
                  key={idx}
                  className="tech-badge"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="project-buttons">

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                View Project
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-btn github-project-btn"
              >
                GitHub
              </a>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;