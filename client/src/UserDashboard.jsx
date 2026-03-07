import { useState, useEffect } from "react";

export default function UserDashboard() {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  const currentUser = "Ahmed"; // normally comes from login

  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];

    const savedTasks = JSON.parse(localStorage.getItem("all_tasks")) || [];

    setProjects(savedProjects);

    const myTasks = savedTasks.filter((task) => task.assignee === currentUser);

    setTasks(myTasks);
  }, []);

  const completed = tasks.filter((t) => t.status === "done").length;
  const pending = tasks.filter((t) => t.status !== "done").length;

  return (
    <div style={styles.page}>
      <div style={styles.navbar}>{currentUser} Dashboard</div>

      <div style={styles.dashboard}>
        {/* Analytics */}

        <div style={styles.analytics}>
          <div style={styles.card}>
            My Tasks
            <p>{tasks.length}</p>
          </div>

          <div style={styles.card}>
            Completed
            <p>{completed}</p>
          </div>

          <div style={styles.card}>
            Pending
            <p>{pending}</p>
          </div>
        </div>

        {/* Assigned Tasks */}

        <h2 style={styles.heading}>My Tasks</h2>

        {tasks.length === 0 ? (
          <p>No tasks assigned.</p>
        ) : (
          <div style={styles.taskList}>
            {tasks.map((task) => {
              const project = projects.find((p) => p.id === task.projectId);

              return (
                <div key={task.id} style={styles.taskCard}>
                  <h3>{task.title}</h3>

                  <p style={styles.projectName}>
                    Project: {project?.name || "Unknown"}
                  </p>

                  <p>
                    Status: <b>{task.status}</b>
                  </p>

                  <p>Deadline: {task.deadline || "Not set"}</p>
                </div>
              );
            })}
          </div>
        )}

        {/* Upcoming Deadlines */}

        <h2 style={styles.heading}>Upcoming Deadlines</h2>

        <div style={styles.deadlineList}>
          {tasks
            .filter((t) => t.deadline)
            .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
            .slice(0, 3)
            .map((task) => (
              <div key={task.id} style={styles.deadlineCard}>
                <b>{task.title}</b>

                <p>{task.deadline}</p>
              </div>
            ))}
        </div>
      </div>
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
    alignItems: "center",
    paddingLeft: "20px",
    fontSize: "20px",
    fontWeight: "bold",
  },

  dashboard: {
    backgroundColor: "white",
    margin: "20px",
    borderRadius: "10px",
    padding: "30px",
    height: "calc(100vh - 100px)",
    overflowY: "auto",
  },

  analytics: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
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
    marginTop: "25px",
    marginBottom: "15px",
    fontSize: "24px",
    fontWeight: "800",
    color: "#1f3f7a",
  },

  taskList: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  taskCard: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    background: "#f7f7f7",
  },

  projectName: {
    fontSize: "14px",
    color: "#444",
  },

  deadlineList: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  },

  deadlineCard: {
    background: "#f7f7f7",
    padding: "15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    width: "200px",
  },
};
