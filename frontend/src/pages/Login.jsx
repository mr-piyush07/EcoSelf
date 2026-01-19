import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const login = () => {
    navigate("/onboarding");
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Welcome to EchoSelf 🌱</h2>
      <button onClick={login}>Continue</button>
    </div>
  );
}
