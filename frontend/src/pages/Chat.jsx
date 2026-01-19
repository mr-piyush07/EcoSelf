import { useState } from "react";
import "./Chat.css";

export default function Chat() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 I am EchoSelf. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { from: "user", text: input },
      { from: "bot", text: "Thinking..." }, // placeholder
    ]);

    setInput("");
  };

  return (
    <div className="chat-container">
      {/* Header */}
      <div className="chat-header">
        <h2>EchoSelf 🌱</h2>
        <span>Your AI Companion</span>
        <button onClick={() => window.location.reload()}>
  Clear Chat
</button>
      </div>
      


      {/* Messages */}
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat-bubble ${
              msg.from === "user" ? "user" : "bot"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
