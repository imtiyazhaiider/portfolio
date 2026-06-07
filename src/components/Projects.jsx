import poetryImage from "../assets/images/projects/poetry-website.png";
import plantDiseaseImage from "../assets/images/projects/plant-disease.png";
import snakeGameImage from "../assets/images/projects/snake-game.png";
function Projects() {
  const projects = [
    {
      title: "AI Plant Disease Detection",

      description:
        "AI-powered plant disease detection and treatment recommendation system that identifies 38 plant diseases from leaf images using Deep Learning and provides intelligent treatment suggestions for farmers.",

      tech: [
        "React",
        "Flask",
        "Python",
        "PyTorch",
        "MobileNetV2",
        "ONNX",
        "Generative AI",
      ],

      live: "https://plantdiseasedetection-80k7.onrender.com",

      github: "#",

      image: plantDiseaseImage,
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

      live: "https://sukhan-6889.onrender.com",

      github: "https://github.com/imtiyazhaiider/sukhan-poetry",

      image: poetryImage,
    },

    {
      title: "Snake Game",

      description:
        "Classic Snake Game built in Python featuring score tracking, collision detection, food generation, and smooth gameplay mechanics.",

      tech: [
        "Python",
        "Pygame",
        "Game Development",
        "OOP",
      ],

      github: "https://github.com/imtiyazhaiider/snake-game",

      image: snakeGameImage,
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

            <div className="project-buttons">

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                View Project
              </a>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-project-btn"
                >
                  GitHub
                </a>
              )}

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;