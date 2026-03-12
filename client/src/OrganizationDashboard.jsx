import { useState, useEffect } from "react";

export default function OrgDashboard() {
  const [orgId, setOrgId] = useState(null);
  const [projects, setProjects] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [projectName, setProjectName] = useState("");

  useEffect(() => {
    verifyOrganization();
  }, []);

  const verifyOrganization = async () => {
    try {
      const res = await fetch("http://localhost:8000/org-auth/verify-me", {
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        console.log("Not authenticated");
        return;
      }
      const id = data.user.id;

      setOrgId(id);

      fetchProjects(id);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProjects = async (orgId) => {
    try {
      const res = await fetch(
        `http://localhost:8000/project/get-all/${orgId}`,
        {
          credentials: "include",
        },
      );

      const data = await res.json();
      console.log(data);

      setProjects(data.projects || []);
    } catch (err) {
      console.error(err);
    }
  };

  const createProject = async () => {
    if (!projectName.trim()) {
      alert("Project name required");
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/project/create", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        credentials: "include",

        body: JSON.stringify({
          name: projectName,
          orgId: orgId,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      fetchProjects(orgId);

      setProjectName("");
      setShowModal(false);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteProject = async (id) => {
    try {
      await fetch(`http://localhost:8000/project/delete/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      fetchProjects(orgId);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.navbar}>
        <span>Organization Dashboard</span>

        <button style={styles.addBtn} onClick={() => setShowModal(true)}>
          +
        </button>
      </div>

      <div style={styles.dashboard}>
        <h2 style={styles.heading}>Projects</h2>

        {projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          <div style={styles.projectGrid}>
            {projects.map((project) => (
              <div key={project._id} style={styles.projectCard}>
                <h3>{project.name}</h3>

                <p>Members: {project.members?.length || 0}</p>
                <p>Sprints: {project.sprints?.length || 0}</p>

                <button
                  style={styles.deleteBtn}
                  onClick={() => deleteProject(project._id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h3>Create Project</h3>

            <input
              style={styles.input}
              placeholder="Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
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
    fontFamily: "Arial",
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
    fontWeight: "bold",
  },

  addBtn: {
    fontSize: "24px",
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
  },

  dashboard: {
    backgroundColor: "white",
    margin: "20px",
    borderRadius: "10px",
    padding: "30px",
  },

  heading: {
    fontSize: "26px",
    color: "#1f3f7a",
    marginBottom: "15px",
  },

  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
    gap: "15px",
  },

  projectCard: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    background: "#f7f7f7",
  },

  deleteBtn: {
    marginTop: "10px",
    background: "red",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: "4px",
    cursor: "pointer",
  },

  modalOverlay: {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    background: "white",
    padding: "30px",
    borderRadius: "8px",
    width: "300px",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginTop: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },

  modalButtons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },

  createBtn: {
    background: "#2a5298",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },

  cancelBtn: {
    background: "#ccc",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
