import { useEffect, useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
export default function ProjectsDashboard() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    fetch(
      "https://script.google.com/macros/s/AKfycbz_loyVk8KGQNVLxEO8boE6xb-5ydeoJghnIgOPvaXgsTQ34vI39X0z1Y3GEsPst7TQ/exec"
    )
      .then((res) => res.json())
      .then((data) => {

        const wonProjects =
          data.filter(
            project =>
              project.status === "Won"
          );

        setProjects(wonProjects);

      });

  }, []);

  return (

    <div
      style={{
        maxWidth: "1200px",
        margin: "50px auto",
        padding: "20px",
      }}
    >

     <AdminNavbar />

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >

        {projects.map((project,index)=>(

          <div
            key={index}
            className="crm-card"
          >

            <h2>
              {project.business}
            </h2>

            <p>

              <strong>Client:</strong>

              {project.name}

            </p>

            <p>

              <strong>Service:</strong>

              {project.service}

            </p>

            <p>

              <strong>Status:</strong>

              {project.projectStatus}

            </p>

            <p>

              <strong>Assigned:</strong>

              {project.assignedTo}

            </p>

            <p>

              <strong>Deadline:</strong>

              {project.deadline}

            </p>

            <p>

              <strong>Balance:</strong>

              KES {project.balance}

            </p>

          </div>

        ))}

      </div>

    </div>

  );

}