import { useState, useEffect } from "react";

export default function ProjectTasks({ project }) {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks =
      JSON.parse(localStorage.getItem(`tasks_${project.id}`)) || [];
    setTasks(savedTasks);
  }, [project.id]);

  return (
    <div style={styles.page}>

      {/* Navbar */}
      <div style={styles.navbar}>
        {project.name} Tasks
      </div>

      <div style={styles.dashboard}>

        <h2 style={styles.heading}>Project Tasks</h2>

        {tasks.length === 0 ? (
          <p>No tasks assigned for this project yet.</p>
        ) : (
          <ul style={styles.taskList}>
            {tasks.map((task) => (
              <li key={task.id} style={styles.taskItem}>
                {task.name}
              </li>
            ))}
          </ul>
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
    fontSize: "26px",
    fontWeight: "800",
    color: "#1f3f7a",
    borderBottom: "3px solid #1f3f7a",
    paddingBottom: "6px",
    marginBottom: "15px"
  },

  taskList: {
    listStyle: "none",
    padding: 0
  },

  taskItem: {
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    marginBottom: "10px",
    backgroundColor: "#f7f7f7",
    fontWeight: "bold"
  }

};