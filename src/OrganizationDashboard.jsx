import { useState, useEffect } from "react";

export default function OrgDashboard() {

  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [projectName, setProjectName] = useState("");

  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(savedProjects);
  }, []);

  const createProject = () => {

    if (!projectName.trim()) {
      alert("Project name cannot be empty");
      return;
    }

    const newProject = {
      id: Date.now(),
      name: projectName
    };

    const updatedProjects = [...projects, newProject];

    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));

    setProjectName("");
    setShowModal(false);
  };

  return (
    <div style={styles.page}>

      {/* Navbar */}
      <div style={styles.navbar}>
        <span>Organization Dashboard</span>

        <button
          style={styles.addButton}
          onClick={() => setShowModal(true)}
        >
          +
        </button>
      </div>

      {/* White Dashboard Area */}
      <div style={styles.dashboard}>

        <h2 style={styles.heading}>Existing Projects</h2>

        {projects.length === 0 ? (
          <p>No projects created yet.</p>
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

      {/* Modal for Creating Project */}
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>

            <h3>Create New Project</h3>

            <input
              type="text"
              placeholder="Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              style={styles.input}
            />

            <div style={styles.modalButtons}>
              <button style={styles.createBtn} onClick={createProject}>
                Create
              </button>

              <button
                style={styles.cancelBtn}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}

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
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    fontSize: "20px",
    fontWeight: "bold"
  },

  addButton: {
    fontSize: "26px",
    backgroundColor: "white",
    color: "#000080",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    cursor: "pointer",
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
  },

  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  modal: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "8px",
    width: "300px",
    textAlign: "center"
  },

  input: {
    width: "100%",
    padding: "10px",
    marginTop: "15px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },

  modalButtons: {
    display: "flex",
    justifyContent: "space-between"
  },

  createBtn: {
    backgroundColor: "#2a5298",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer"
  },

  cancelBtn: {
    backgroundColor: "#ccc",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer"
  }

};