import poetryImage from "../assets/images/projects/poetry-website.png";
function Projects() {
  const projects = [
    {
      title: "AI Fitness Tracker",

      description:
        "Machine Learning application that predicts calories burned during exercise using user health and activity data.",

      tech: [
        "Python",
        "Machine Learning",
        "RandomForestRegressor",
        "Streamlit",
      ],

      github: "https://github.com/imtiyazhaiider/sukhan-poetry",
    },

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

      github: "https://github.com/imtiyazhaiider/sukhan-poetry",

      image: poetryImage,
    },

    {
      title: "Portfolio Website",

      description:
        "Personal portfolio showcasing projects, skills, achievements and contact information.",

      tech: [
        "React",
        "CSS",
        "JavaScript",
      ],

      github: "#",
    },

    {
      title: "AI Writing Assistant",

      description:
        "An AI-powered writing companion designed to help writers generate and improve content.",

      tech: [
        "Python",
        "Django",
        "OpenAI",
      ],

      github: "#",

      status: "Coming Soon",
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

                {project.image ? (
                <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                />
                ) : (
            project.title
            )}

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

            {project.status && (
              <span className="status">
                {project.status}
              </span>
            )}

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              View Project
            </a>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;