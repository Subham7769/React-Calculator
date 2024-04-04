import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Tab2.css";

function Tab2() {
  const [messages, setMessages] = useState([]); // State for chat messages
  const [inputMessage, setInputMessage] = useState(""); // State for user input

  // Function to fetch messages from the API
  const fetchMessages = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setMessages(response.data.slice(0, 3)); // Only show the first 3 messages initially
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  // Function to simulate sending a message (using a POST request)
  const sendMessage = async () => {
    if (inputMessage.trim() !== "") {
      const newMessage = { userId: 1, title: "User", body: inputMessage };
      setInputMessage("");
  
      try {
        await axios.post("https://jsonplaceholder.typicode.com/posts", newMessage);
        // Message sent successfully (simulated)
        console.log("Message sent:", newMessage);
  
        // Fetch updated messages from the API after sending
        fetchMessages();
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };
w  

  // Fetch messages on initial render
  useEffect(() => {
    fetchMessages();
  }, []);

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
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
        <button onClick={sendMessage} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
}

export default Tab2;
