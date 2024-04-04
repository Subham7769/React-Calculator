import React, { useEffect, useState } from "react";
import axios from "axios";

function ChatInterface() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setMessages(response.data);
    });
  };

  useEffect(() => {
    // Fetch messages initially
    fetchMessages();
    // Poll for new messages every 5 seconds
    const interval = setInterval(fetchMessages, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Chat Interface</h2>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <p>{message.title}</p>
            <p>{message.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatInterface;
