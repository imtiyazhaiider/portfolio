import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiDjango,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiStreamlit,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "Python",
      icon: <FaPython />,
    },
    {
      name: "Java",
      icon: <FaJava />,
    },
    {
      name: "C",
      icon: "C",
    },
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Django",
      icon: <SiDjango />,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
    },
    {
      name: "PyTorch",
      icon: <SiPytorch />,
    },
    {
      name: "NumPy",
      icon: <SiNumpy />,
    },
    {
      name: "Pandas",
      icon: <SiPandas />,
    },
    {
      name: "Machine Learning",
      icon: "AI",
    },
    {
      name: "REST APIs",
      icon: "API",
    },
    {
      name: "Streamlit",
      icon: <SiStreamlit />,
    },
  ];

  return (
    <section
      id="skills"
      className="skills"
    >
      <div className="section-title">
        <h2>Skills & Technologies</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
          >
            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;