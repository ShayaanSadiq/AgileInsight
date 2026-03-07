import { useState, useEffect } from "react";

export default function UserDashboard() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(savedProjects);
  }, []);

  return (
    <div style={styles.page}>

      <div style={styles.navbar}>
        User Dashboard
      </div>

      <div style={styles.dashboard}>

        <h2 style={styles.heading}>Existing Projects</h2>

        {projects.length === 0 ? (
          <p>No projects available.</p>
        ) : (
          <div style={styles.projectGrid}>
            {projects.map((project) => (
              <div key={project.id} style={styles.projectCard}>
                {project.name}
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}

const styles = {

  page: {
    height: "100vh",
    background: "linear-gradient(135deg,#4682B4,#2a5298)",
    fontFamily: "Arial"
  },

  navbar: {
    height: "60px",
    backgroundColor: "#000080",
    color: "white",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    fontSize: "20px",
    fontWeight: "bold"
  },

  dashboard: {
    backgroundColor: "white",
    margin: "20px",
    borderRadius: "10px",
    padding: "30px",
    height: "calc(100vh - 100px)",
    overflowY: "auto"
  },

  heading: {
    marginBottom: "20px",
    fontSize: "28px",
    fontWeight: "800",
    color: "#1f3f7a",
    letterSpacing: "1px",
    borderBottom: "3px solid #1f3f7a",
    paddingBottom: "8px"
  },

  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
    gap: "15px"
  },

  projectCard: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f7f7f7",
    fontWeight: "bold",
    textAlign: "center"
  }

};