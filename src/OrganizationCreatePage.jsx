import { useState } from "react";

export default function OrgAuthPage() {

  const [isLogin, setIsLogin] = useState(true);
  const [isHover, setIsHover] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Email and Password are required");
      return;
    }

    if (isLogin) {
      console.log("Organization Login Data:", {
        email: formData.email,
        password: formData.password
      });
    } else {
      console.log("Organization Signup Data:", formData);
    }
  };

  return (
    <>
      <div style={styles.navbar}>
        Organization Portal
      </div>

      <div style={styles.page}>

        <div style={styles.container}>

          <h2 style={styles.title}>{isLogin ? "Organization Login" : "Organization Signup"}</h2>

          <form onSubmit={handleSubmit} style={styles.form}>

            {!isLogin && (
              <input
                type="text"
                name="name"
                placeholder="Organization Name (optional)"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
              />
            )}

            <input
              type="email"
              name="email"
              placeholder="Organization Email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              required
            />

            <button
              type="submit"
              style={{
                ...styles.button,
                backgroundColor: isHover ? "#1f3f7a" : "#2a5298",
                transform: isHover ? "scale(1.05)" : "scale(1)",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              {isLogin ? "Login" : "Signup"}
            </button>

          </form>

          <p style={styles.text}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span
              style={styles.toggle}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? " Signup" : " Login"}
            </span>
          </p>

        </div>

      </div>
    </>
  );
}

const styles = {

  navbar: {
    width: "100%",
    padding: "15px",
    backgroundColor: "#000080",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    position: "fixed",
    top: 0,
    left: 0
  },

  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #4682B4, #2a5298)",
    fontFamily: "Arial",
    paddingTop: "60px"
  },

  container: {
    width: "360px",
    padding: "35px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
    textAlign: "center"
  },

  title: {
    marginBottom: "20px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px"
  },

  input: {
    padding: "11px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none"
  },

  button: {
    padding: "11px",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold"
  },

  text: {
    marginTop: "15px",
    fontSize: "14px"
  },

  toggle: {
    color: "#2a5298",
    cursor: "pointer",
    fontWeight: "bold"
  }

};