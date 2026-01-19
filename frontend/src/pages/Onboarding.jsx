import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Onboarding() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [goal, setGoal] = useState("");

  const submit = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("goal", goal);
    navigate("/chat");
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Tell us about you 👇</h2>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Your goal"
        onChange={(e) => setGoal(e.target.value)}
      />

      <br /><br />

      <button onClick={submit}>Continue</button>
    </div>
  );
}
