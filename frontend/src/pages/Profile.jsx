import { useState } from "react";

export default function Profile() {
  const savedUsername = localStorage.getItem("username") || "";
  const savedGoal = localStorage.getItem("goal") || "";

  const [username, setUsername] = useState(savedUsername);
  const [goal, setGoal] = useState(savedGoal);
  const [editing, setEditing] = useState(false);

  const saveProfile = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("goal", goal);
    setEditing(false);
    alert("Profile updated successfully ✅");
  };

  return (
    <div style={styles.container}>
      <h2>My Profile 👤</h2>

      {/* Username */}
      <div style={styles.card}>
        <label>Username</label>
        {editing ? (
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        ) : (
          <p>@{username}</p>
        )}
      </div>

      {/* Goal */}
      <div style={styles.card}>
        <label>My Goal</label>
        {editing ? (
          <textarea
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
        ) : (
          <p>{goal}</p>
        )}
      </div>

      {/* Buttons */}
      {!editing ? (
        <button style={styles.btn} onClick={() => setEditing(true)}>
          Edit Profile
        </button>
      ) : (
        <button style={styles.btn} onClick={saveProfile}>
          Save Changes
        </button>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    maxWidth: "500px",
    margin: "auto",
    fontFamily: "Arial",
  },
  card: {
    marginBottom: "20px",
  },
  btn: {
    padding: "10px 20px",
    border: "none",
    background: "#2563eb",
    color: "#fff",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
