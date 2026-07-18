export default function Packages() {
  return (
    <section id="packages" className="section">
      <div className="container">
        <h2
          style={{
            textAlign: "center",
            fontSize: "3rem",
            marginBottom: "60px",
          }}
        >
          Growth Packages
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
          }}
        >
          <div className="card">
            <h3 className="green">
              Foundation Package
            </h3>

            <h2
              style={{
                margin: "20px 0",
              }}
            >
              KES 50,000
            </h2>

            <p>✔ Website Development</p>
            <p>✔ SEO Setup</p>
            <p>✔ Google Business Profile</p>
            <p>✔ Analytics Setup</p>
            <p>✔ WhatsApp Integration</p>
          </div>

          <div
            className="card"
            style={{
              border: "1px solid #C8FF00",
            }}
          >
            <h3 className="green">
              Growth Package
            </h3>

            <h2
              style={{
                margin: "20px 0",
              }}
            >
              KES 30,000/month
            </h2>

            <p>✔ Monthly SEO Optimization</p>
            <p>✔ Google Business Management</p>
            <p>✔ Content Creation</p>
            <p>✔ Performance Reporting</p>
            <p>✔ Visibility Growth Strategy</p>
          </div>
        </div>
      </div>
    </section>
  );
}