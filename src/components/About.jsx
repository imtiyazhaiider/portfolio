function About() {
  const cards = [
    {
      title: "📍 Location",
      value: "India",
    },
    {
      title: "🎓 Education",
      value: "B.Tech CSE",
    },
    {
      title: "💻 Interests",
      value: "Web Development",
    },
    {
      title: "🤖 AI & ML",
      value: "Learning & Building",
    },
  ];

  return (
    <section
      id="about"
      className="about"
    >
      <div className="section-title">
        <h2>About Me</h2>
      </div>

      <div className="about-content">

        <p>
          I am Imtiyaz Haider, a Computer Science
          Engineering student passionate about
          Software Development, Artificial Intelligence,
          and solving real-world problems through technology.

          My journey into programming began with curiosity
          about how software works, which eventually led me
          to explore web development, machine learning,
          and AI-powered applications.

          I enjoy building practical projects, learning new
          technologies, and continuously improving my
          problem-solving skills.

          My goal is to become a skilled Software Developer
          and AI Engineer capable of creating impactful
          solutions.
        </p>

      </div>

      <div className="about-cards">

        {cards.map((card, index) => (
          <div
            key={index}
            className="about-card"
          >
            <h3>{card.title}</h3>
            <p>{card.value}</p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default About;