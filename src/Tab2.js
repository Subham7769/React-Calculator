import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Tab2.css"; // Import CSS file for styling

function Tab2() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    // Fetch initial messages when component mounts
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setMessages(response.data);
    });
  };

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  const handleSendMessage = () => {
    const newMessage = { userId: 1, title: "User", body: inputMessage };
    setMessages([...messages, newMessage]);
    setInputMessage("");

    // Make a POST request to simulate sending a message
    axios.post("https://jsonplaceholder.typicode.com/posts", newMessage).then((response) => {
      console.log("Message sent:", response.data);
    });

    // For demonstration, simulate bot response after 1 second
    setTimeout(() => {
      const botResponse = { userId: 2, title: "Bot", body: "Hello! This is a bot response." };
      setMessages([...messages, botResponse]);
    }, 1000);
  };

  return (
    <div className="chat-container">
      <h2 className="chat-header">Chat Interface</h2>
      <div className="message-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.userId === 1 ? "user-message" : "bot-message"}`}>
            <p className="message-body">{message.body}</p>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputMessage}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="input-message"
        />
        <button onClick={handleSendMessage} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
}

export default Tab2;
