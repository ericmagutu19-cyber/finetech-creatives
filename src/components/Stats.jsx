export default function Stats() {
  const stats = [
    {
      number: "20+",
      label: "Projects Completed",
    },
    {
      number: "10+",
      label: "Businesses Assisted",
    },
    {
      number: "95%",
      label: "Client Satisfaction",
    },
    {
      number: "100%",
      label: "Growth Focused",
    },
  ];

  return (
    <section className="section">
      <div className="container">

        <h2 className="stats-heading">
          Results That Matter
        </h2>

        <div className="stats-grid">
          {stats.map((item, index) => (
            <div
              key={index}
              className="stat-card"
            >
              <h2 className="green">
                {item.number}
              </h2>

              <p>{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}