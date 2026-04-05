import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AssistantIcon from "@mui/icons-material/Assistant";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import axios from "axios";
import { css } from "@emotion/react";
import "../assets/styles/Main.scss";
import MyImage from "../assets/images/me.jpeg";

function Main() {
  interface Message {
    text: string;
    sender: "user" | "ai";
  }

  const initialMessage: Message = { 
    text: "Hi there! I'm Yash's AI assistant. Ask me anything about his experience, skills, or projects!", 
    sender: "ai" 
  };

  const [messages, setMessages] = React.useState<Message[]>([initialMessage]);
  const [input, setInput] = React.useState(""); // Stores user input
  const [loading, setLoading] = React.useState(false); // Stores user input
  const [sessionId, setSessionId] = React.useState<string>("");
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Generate or retrieve session ID
    let id = localStorage.getItem("chat_session_id");
    if (!id) {
      id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      localStorage.setItem("chat_session_id", id);
    }
    setSessionId(id);

    // Fetch history from backend
    const fetchHistory = async (session_id: string) => {
      try {
        const baseUrl =
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000"
            : "https://yg-portfolio-gemini.onrender.com";
        
        const response = await axios.get(`${baseUrl}/history/${session_id}`);
        if (response.data.history && response.data.history.length > 0) {
          const historyMessages = response.data.history.map((msg: any) => ({
            text: msg.content,
            sender: msg.role === "user" ? "user" : "ai"
          }));
          
          setMessages([
            initialMessage,
            ...historyMessages
          ]);
        }
      } catch (error) {
        console.error("Error fetching chat history:", error);
      }
    };

    fetchHistory(id);
  }, []);

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  };

  // Function to handle clearing history
  const clearHistory = async () => {
    if (!window.confirm("Are you sure you want to clear the conversation?")) return;

    try {
      const baseUrl =
        process.env.NODE_ENV === "development"
          ? "http://127.0.0.1:8000"
          : "https://yg-portfolio-gemini.onrender.com";
      
      await axios.delete(`${baseUrl}/history/${sessionId}`);
      setMessages([initialMessage]);
    } catch (error) {
      console.error("Error clearing history:", error);
    }
  };

  // Function to handle sending a message
  const sendMessage = async () => {
    if (!input.trim()) return; // Don't send empty messages

    setLoading(true);
    // Add the user's message to the chat history
    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Clear the input field
    setInput("");

    try {
      const apiUrl =
        process.env.NODE_ENV === "development"
          ? "http://127.0.0.1:8000/predict/"
          : "https://yg-portfolio-gemini.onrender.com/predict";

      const resp = await axios.post(
        apiUrl,
        {
          input_text: input,
          session_id: sessionId
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      // Add the AI's response to the chat history
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: resp.data.response, sender: "ai" },
      ]);

      setLoading(false);
    } catch (error) {
      console.error("Error calling the API:", error);
      // Handle errors (e.g., show an error message)
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Failed to get a response. Please try again.", sender: "ai" },
      ]);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="about-section">
        <div className="about-details">
          <div className="image-wrapper">
            <img src={MyImage} alt="Avatar" />
          </div>
          <div className="content">
            <div className="social_icons">
              <a
                href="https://github.com/yg-yash"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/yg-yash/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
            <h1>Yash Gupta</h1>
            <p>Senior AI Engineer | Full-Stack Developer</p>

            <div className="mobile_social_icons">
              <a
                href="https://github.com/yg-yash"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/yg-yash/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="chat-wrapper">
          <div className="chat-modal">
            <div className="right-side">
              <div className="chat-container">
                <div className="chat-header">
                  <div className="avatar-title">
                    <img src={MyImage} className="chat-avatar" alt="Avatar" />
                    <div className="chat-title">
                      <h4>Yash's AI Assistant</h4>
                      <span className="online-status">
                        <span className="dot"></span> Online
                      </span>
                    </div>
                  </div>
                  <div className="chat-actions">
                    <button 
                      className="clear-btn" 
                      onClick={clearHistory}
                      title="Clear conversation"
                    >
                      <DeleteSweepIcon />
                    </button>
                  </div>
                </div>
                <div className="chat-messages" ref={messagesEndRef}>
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`message ${
                        message.sender === "user" ? "user" : "ai"
                      }`}
                    >
                      {message.text}
                    </div>
                  ))}
                </div>
                <div className="chat-input">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Have a question about my work, experience, or skills? Ask away!"
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  />
                  <button onClick={sendMessage}>
                    {loading ? <div className="loader" /> : <SendIcon />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
