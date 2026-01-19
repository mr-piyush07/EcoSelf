import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const register = () => {
    if (!email || !password || !username) {
      alert("Please fill all fields");
      return;
    }

    // Temporary frontend storage (backend later)
    localStorage.setItem("email", email);
    localStorage.setItem("username", username);

    // Move to onboarding step
    localStorage.setItem("step", "onboarding");

    alert("Registration Successful 🚀");
    window.location.reload();
  };

  return (
    <div style={styles.container}>
      <h2>Create EchoSelf Account 🌱</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />

      <button onClick={register} style={styles.button}>
        Register
      </button>

      <p style={styles.text}>
        Already have an account? <b>Login</b>
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "80px auto",
    padding: "30px",
    textAlign: "center",
    fontFamily: "Arial",
    borderRadius: "10px",
    background: "#f5f7fb",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    border: "none",
    borderRadius: "6px",
    background: "#2563eb",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
  text: {
    marginTop: "15px",
    fontSize: "14px",
  },
};
