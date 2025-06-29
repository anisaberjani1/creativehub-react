import React, { useRef, useState } from "react";

const Assignment3 = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages((prev) => [...prev, input]);
    setInput("");
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          height: "200px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            {msg}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1, padding: "5px" }}
          placeholder="Type a message..."
        />
        <button onClick={handleSend} style={{ marginLeft: "5px" }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Assignment3;
