import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OrgDashboard() {
  const navigate = useNavigate();

  const [orgId, setOrgId] = useState(null);
  const [projects, setProjects] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [projectName, setProjectName] = useState("");
  const [role, setRole] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);

  // TEMP USERS (IDs you gave)
  const roleMembers = {
    Manager: [{ id: "69abe6742983fc5b7dd87997", name: "Ayaan" }],
    Developer: [
      { id: "69ac0f1bc9f55fd7232ee1d8", name: "Shayaan" },
      { id: "69ac0f1bc9f55fd7232ee1d9", name: "Rahul" },
    ],
    Tester: [{ id: "69ac0f1bc9f55fd7232ee1dc", name: "Sara" }],
    Designer: [{ id: "69ac0f1bc9f55fd7232ee1d9", name: "Rahul" }],
  };

  useEffect(() => {
    verifyOrganization();
  }, []);

  const verifyOrganization = async () => {
    try {
      const res = await fetch("http://localhost:8000/org-auth/verify-me", {
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) return;

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
        { credentials: "include" },
      );

      const data = await res.json();

      setProjects(data.projects || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleMemberSelect = (e) => {
    const options = e.target.options;
    const selected = [];

    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selected.push(options[i].value);
      }
    }

    setSelectedMembers(selected);
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
          orgId,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      const projectId = data.project._id;

      await fetch("http://localhost:8000/member/add", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        credentials: "include",

        body: JSON.stringify({
          projectId,
          role,
          members: selectedMembers,
        }),
      });

      fetchProjects(orgId);

      setProjectName("");
      setRole("");
      setSelectedMembers([]);

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

  const goToProject = (id) => {
    navigate(`/project/${id}`);
  };

  const totalProjects = projects.length;

  return (
    <div style={styles.page}>
      <div style={styles.navbar}>
        <span>Organization Dashboard</span>

        <button style={styles.addBtn} onClick={() => setShowModal(true)}>
          +
        </button>
      </div>

      <div style={styles.analytics}>
        <div style={styles.analyticsCard}>
          <h3>{totalProjects}</h3>
          <p>Total Projects</p>
        </div>
      </div>

      <div style={styles.dashboard}>
        <h2 style={styles.heading}>Projects</h2>

        {projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          <div style={styles.projectGrid}>
            {projects.map((project) => (
              <div
                key={project._id}
                style={styles.projectCard}
                onClick={() => goToProject(project._id)}
              >
                <h3>{project.name}</h3>

                <button
                  style={styles.deleteBtn}
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteProject(project._id);
                  }}
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

            <select
              style={styles.input}
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
                setSelectedMembers([]);
              }}
            >
              <option value="">Select Role</option>
              <option value="Manager">Manager</option>
              <option value="Developer">Developer</option>
              <option value="Tester">Tester</option>
              <option value="Designer">Designer</option>
            </select>

            {role && (
              <select
                multiple
                style={styles.input}
                onChange={handleMemberSelect}
              >
                {roleMembers[role].map((member) => (
                  <option key={member.id} value={member.id}>
                    {member.name}
                  </option>
                ))}
              </select>
            )}

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
    minHeight: "100vh",
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

  analytics: {
    margin: "20px",
  },

  analyticsCard: {
    background: "white",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
  },

  dashboard: {
    backgroundColor: "white",
    margin: "20px",
    borderRadius: "10px",
    padding: "30px",
  },

  heading: {
    fontSize: "26px",
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
    cursor: "pointer",
  },

  deleteBtn: {
    marginTop: "10px",
    background: "red",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: "4px",
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
    width: "320px",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
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
  },

  cancelBtn: {
    background: "#ccc",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
  },
};
