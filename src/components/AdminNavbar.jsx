import { Link, useLocation } from "react-router-dom";

export default function AdminNavbar() {

  const location = useLocation();

  const linkStyle = (path) => ({
    padding: "10px 18px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "600",
    color:
      location.pathname === path
        ? "#000"
        : "#fff",
    background:
      location.pathname === path
        ? "#C8FF00"
        : "#222",
    transition: ".3s",
  });

  return (

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "40px",
        paddingBottom: "20px",
        borderBottom: "1px solid #333",
      }}
    >

      <h1
        style={{
          margin: 0,
        }}
      >
        Fine Tech Creatives
Agency OS
      </h1>

      <div
        style={{
          display: "flex",
          gap: "15px",
        }}
      >

        <Link
          to="/admin"
          style={linkStyle("/admin")}
        >
          📊 Dashboard
        </Link>

        <Link
          to="/projects"
          style={linkStyle("/projects")}
        >
          📁 Projects
        </Link>

        <Link
          to="/proposal-generator"
          style={linkStyle("/proposal-generator")}
        >
          📄 Proposal
        </Link>

      </div>

    </div>

  );

}