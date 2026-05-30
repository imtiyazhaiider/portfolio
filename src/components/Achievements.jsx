function Achievements() {
  const achievements = [
    {
      number: "01",
      title: "Internship Completed",
    },
    {
      number: "04",
      title: "Projects Built",
    },
    {
      number: "10+",
      title: "Technologies Learned",
    },
    {
      number: "01",
      title: "Certification Earned",
    },
  ];

  return (
    <section className="achievements">
      <div className="section-title">
        <h2>Achievements</h2>
      </div>

      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="achievement-card"
          >
            <h3>{item.number}</h3>

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;