export default function Testimonials() {
  const testimonials = [
    {
      name: "Business Owner",
      text: "Fine Tech Creatives helped us improve our online visibility and attract more inquiries.",
    },
    {
      name: "Beauty Brand",
      text: "The branding and growth strategy gave our business a professional online presence.",
    },
    {
      name: "SME Client",
      text: "Their SEO and website setup positioned us better against competitors.",
    },
  ];

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
          Client Feedback
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: "20px",
          }}
        >
          {testimonials.map((item, index) => (
            <div key={index} className="card">
              <p
                style={{
                  color: "#ccc",
                  marginBottom: "20px",
                }}
              >
                "{item.text}"
              </p>

              <h4 className="green">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}