const processSteps = [
  {
    number: "01",
    title: "Discovery",
    text: "Understanding your business and goals.",
  },
  {
    number: "02",
    title: "Audit",
    text: "Identifying opportunities and weaknesses.",
  },
  {
    number: "03",
    title: "Strategy",
    text: "Creating a customized growth plan.",
  },
  {
    number: "04",
    title: "Implementation",
    text: "Executing websites, SEO and marketing.",
  },
  {
    number: "05",
    title: "Growth",
    text: "Monitoring performance and scaling results.",
  },
];

export default function Process() {
  return (
    <section className="section">
      <div className="container">
        <h2
          style={{
            textAlign: "center",
            fontSize: "3rem",
            marginBottom: "60px",
          }}
        >
          Our Growth Process
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
          }}
        >
          {processSteps.map((step) => (
            <div className="card" key={step.number}>
              <h1
                className="green"
                style={{
                  fontSize: "3rem",
                }}
              >
                {step.number}
              </h1>

              <h3>{step.title}</h3>

              <p
                style={{
                  color: "#ccc",
                  marginTop: "10px",
                }}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}