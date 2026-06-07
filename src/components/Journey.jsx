function Journey() {
  const timeline = [
    {
      year: "2025",
      title: "AICTE TechSaksham Internship",
    },
    {
      year: "2025",
      title: "Built AI Fitness Tracker",
    },
    {
      year: "2026",
      title: "Built Poetry Website",
    },
  ];

  return (
    <section id="journey" className="journey">
      <div className="section-title">
        <h2>Learning Journey</h2>
      </div>

      <div className="timeline">
        {timeline.map((item, index) => (
          <div key={index} className="timeline-item">
            <span className="timeline-year">
              {item.year}
            </span>

            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Journey;