import { useState } from "react";

export default function ProjectTasks({ project }) {
  const [projectMembers] = useState([
    { name: "Ahmed", role: "Backend Developer" },
    { name: "Sara", role: "Frontend Developer" },
    { name: "Rahul", role: "Tester" },
  ]);

  const [sprints, setSprints] = useState([
    { id: 1, name: "Sprint 1", active: true },
  ]);

  const [tasks, setTasks] = useState([
    { id: 1, title: "API Integration", assignee: "Ahmed", status: "todo" },
    { id: 2, title: "Login UI", assignee: "Sara", status: "progress" },
    { id: 3, title: "Testing Login", assignee: "Rahul", status: "done" },
  ]);

  const [taskTitle, setTaskTitle] = useState("");
  const [assignee, setAssignee] = useState("");

  const activeSprint = sprints.find((s) => s.active);

  const todo = tasks.filter((t) => t.status === "todo").length;
  const progress = tasks.filter((t) => t.status === "progress").length;
  const done = tasks.filter((t) => t.status === "done").length;

  const createTask = () => {
    if (!taskTitle || !assignee) return;

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      assignee,
      status: "todo",
    };

    setTasks([...tasks, newTask]);
    setTaskTitle("");
    setAssignee("");
  };

  const createNextSprint = () => {
    const newSprint = {
      id: Date.now(),
      name: `Sprint ${sprints.length + 1}`,
      active: true,
    };

    const updated = sprints.map((s) => ({ ...s, active: false }));

    setSprints([...updated, newSprint]);
  };

  const completeProject = () => {
    alert("Project Completed 🎉");
  };

  return (
    <div style={styles.page}>
      <div style={styles.navbar}>{project?.name || "Project"} Dashboard</div>

      <div style={styles.dashboard}>
        {/* ANALYTICS */}

        <div style={styles.analytics}>
          <div style={styles.card}>
            Total Tasks
            <p>{tasks.length}</p>
          </div>

          <div style={styles.card}>
            In Progress
            <p>{progress}</p>
          </div>

          <div style={styles.card}>
            Completed
            <p>{done}</p>
          </div>
        </div>

        {/* PROJECT MEMBERS */}

        <h2 style={styles.heading}>Project Members</h2>

        <div style={styles.memberList}>
          {projectMembers.map((member, i) => (
            <div key={i} style={styles.memberCard}>
              {member.name}
              <br />
              <small>{member.role}</small>
            </div>
          ))}
        </div>

        {/* ACTIVE SPRINT */}

        <h2 style={styles.heading}>Current Sprint</h2>

        <div style={styles.sprintBox}>
          {activeSprint ? (
            <h3>{activeSprint.name} is Active</h3>
          ) : (
            <p>No Sprint Active</p>
          )}
        </div>

        {/* TASK ASSIGNMENT */}

        <h2 style={styles.heading}>Assign Task</h2>

        <div style={styles.taskForm}>
          <input
            placeholder="Task Name"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            style={styles.input}
          />

          <select
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
            style={styles.input}
          >
            <option value="">Assign Member</option>

            {projectMembers.map((m) => (
              <option key={m.name}>{m.name}</option>
            ))}
          </select>

          <button style={styles.addBtn} onClick={createTask}>
            Add Task
          </button>
        </div>

        {/* TASK BOARD */}

        <h2 style={styles.heading}>Sprint Tasks</h2>

        <div style={styles.taskBoard}>
          <div style={styles.column}>
            <h3>Todo</h3>

            {tasks
              .filter((t) => t.status === "todo")
              .map((task) => (
                <div key={task.id} style={styles.taskCard}>
                  {task.title}
                  <br />
                  <small>{task.assignee}</small>
                </div>
              ))}
          </div>

          <div style={styles.column}>
            <h3>In Progress</h3>

            {tasks
              .filter((t) => t.status === "progress")
              .map((task) => (
                <div key={task.id} style={styles.taskCard}>
                  {task.title}
                  <br />
                  <small>{task.assignee}</small>
                </div>
              ))}
          </div>

          <div style={styles.column}>
            <h3>Done</h3>

            {tasks
              .filter((t) => t.status === "done")
              .map((task) => (
                <div key={task.id} style={styles.taskCard}>
                  {task.title}
                  <br />
                  <small>{task.assignee}</small>
                </div>
              ))}
          </div>
        </div>

        {/* SPRINT ACTIONS */}

        <div style={styles.sprintActions}>
          <button style={styles.nextSprintBtn} onClick={createNextSprint}>
            Start Next Sprint
          </button>

          <button style={styles.completeBtn} onClick={completeProject}>
            Complete Project
          </button>
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
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    fontWeight: "bold",
  },

  heading: {
    fontSize: "22px",
    fontWeight: "800",
    color: "#1f3f7a",
    marginTop: "25px",
    marginBottom: "10px",
  },

  select: {
    padding: "8px",
    borderRadius: "6px",
    marginBottom: "15px",
  },

  memberBox: {
    marginBottom: "20px",
  },

  memberItem: {
    marginBottom: "6px",
  },

  addBtn: {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#2a5298",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },

  memberList: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },

  memberCard: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    backgroundColor: "#f5f5f5",
    width: "140px",
    textAlign: "center",
  },

  taskBoard: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "20px",
    marginTop: "20px",
  },

  column: {
    backgroundColor: "#f7f7f7",
    padding: "15px",
    borderRadius: "8px",
    minHeight: "200px",
  },

  taskCard: {
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    marginBottom: "10px",
  },
  sprintBox: {
    background: "#f7f7f7",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "20px",
  },

  taskForm: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },

  input: {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },

  sprintActions: {
    marginTop: "30px",
    display: "flex",
    gap: "10px",
  },

  nextSprintBtn: {
    background: "#2a5298",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  completeBtn: {
    background: "#0a7d2c",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
