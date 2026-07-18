export default function Results() {
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
          What We Help Businesses Achieve
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          <div className="card">
            📈 More Visibility
          </div>

          <div className="card">
            💬 More Customer Inquiries
          </div>

          <div className="card">
            🚀 Better Online Presence
          </div>

          <div className="card">
            💰 More Sales Opportunities
          </div>
        </div>

      </div>
    </section>
  );
}