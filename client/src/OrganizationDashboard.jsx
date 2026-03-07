import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OrgDashboard() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [projectName, setProjectName] = useState("");
  const [role, setRole] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);

  const [sprintName, setSprintName] = useState("");

  const roleMembers = {
    "Backend Developer": ["Ahmed", "Ravi", "Imran"],
    "Frontend Developer": ["Sara", "Ali", "Kiran"],
    "UI Designer": ["Maya", "Fatima"],
    Tester: ["John", "Rahul"],
  };

  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];

    const savedTasks = JSON.parse(localStorage.getItem("all_tasks")) || [];

    setProjects(savedProjects);
    setTasks(savedTasks);
  }, []);

  const toggleMember = (member) => {
    if (selectedMembers.includes(member)) {
      setSelectedMembers(selectedMembers.filter((m) => m !== member));
    } else {
      setSelectedMembers([...selectedMembers, member]);
    }
  };

  const createProject = () => {
    if (!projectName.trim()) {
      alert("Project name required");
      return;
    }

    const newProject = {
      id: Date.now(),
      name: projectName,

      members: selectedMembers.map((name) => ({
        name,
        role,
      })),

      sprints: sprintName ? [{ id: Date.now() + 1, name: sprintName }] : [],
    };

    const updatedProjects = [...projects, newProject];

    setProjects(updatedProjects);

    localStorage.setItem("projects", JSON.stringify(updatedProjects));

    setProjectName("");
    setRole("");
    setSelectedMembers([]);
    setSprintName("");

    setShowModal(false);
  };

  const completedTasks = tasks.filter((t) => t.status === "done").length;

  return (
    <div style={styles.page}>
      {/* NAVBAR */}

      <div style={styles.navbar}>
        <span>Organization Dashboard</span>

        <button style={styles.addButton} onClick={() => setShowModal(true)}>
          +
        </button>
      </div>

      <div style={styles.dashboard}>
        {/* ANALYTICS */}

        <div style={styles.analytics}>
          <div style={styles.card}>
            <h3>Total Projects</h3>
            <p>{projects.length}</p>
          </div>

          <div style={styles.card}>
            <h3>Total Tasks</h3>
            <p>{tasks.length}</p>
          </div>

          <div style={styles.card}>
            <h3>Completed Tasks</h3>
            <p>{completedTasks}</p>
          </div>

          <div style={styles.card}>
            <h3>Active Tasks</h3>
            <p>{tasks.length - completedTasks}</p>
          </div>
        </div>

        {/* PROJECTS */}

        <h2 style={styles.heading}>Projects</h2>

        {projects.length === 0 ? (
          <p>No projects created yet.</p>
        ) : (
          <div style={styles.projectGrid}>
            {projects.map((project) => (
              <div
                key={project.id}
                style={styles.projectCard}
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <h3>{project.name}</h3>

                <p style={styles.projectStats}>
                  Members: {project.members?.length || 0}
                </p>

                <p style={styles.projectStats}>
                  Sprints: {project.sprints?.length || 0}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CREATE PROJECT MODAL */}

      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h3>Create Project</h3>

            {/* Project Name */}

            <input
              style={styles.input}
              placeholder="Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />

            {/* Role Selection */}

            <select
              style={styles.input}
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Role</option>

              {Object.keys(roleMembers).map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>

            {/* Members */}

            {role && (
              <div style={styles.memberList}>
                {roleMembers[role].map((member) => (
                  <label key={member}>
                    <input
                      type="checkbox"
                      checked={selectedMembers.includes(member)}
                      onChange={() => toggleMember(member)}
                    />

                    {member}
                  </label>
                ))}
              </div>
            )}

            {/* Sprint */}

            <input
              style={styles.input}
              placeholder="First Sprint Name"
              value={sprintName}
              onChange={(e) => setSprintName(e.target.value)}
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
    height: "100%",
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

  addButton: {
    fontSize: "26px",
    backgroundColor: "white",
    color: "#000080",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    cursor: "pointer",
  },

  dashboard: {
    backgroundColor: "white",
    margin: "20px",
    borderRadius: "10px",
    padding: "30px",
    height: "calc(100vh - 100px)",
  },

  analytics: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "20px",
    marginBottom: "30px",
  },

  card: {
    backgroundColor: "#f7f7f7",
    borderRadius: "8px",
    padding: "20px",
    textAlign: "center",
    fontWeight: "bold",
  },

  heading: {
    marginTop: "20px",
    marginBottom: "15px",
    fontSize: "26px",
    fontWeight: "800",
    color: "#1f3f7a",
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
    backgroundColor: "#f7f7f7",
    cursor: "pointer",
  },

  projectStats: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#444",
  },

  taskList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  taskItem: {
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#f7f7f7",
  },

  status: {
    color: "#2a5298",
    fontWeight: "bold",
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
    alignItems: "center",
  },

  modal: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "8px",
    width: "300px",
    textAlign: "center",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginTop: "15px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },

  modalButtons: {
    display: "flex",
    justifyContent: "space-between",
  },

  createBtn: {
    backgroundColor: "#2a5298",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },

  cancelBtn: {
    backgroundColor: "#ccc",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
