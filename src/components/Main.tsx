import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AssistantIcon from "@mui/icons-material/Assistant";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { css } from "@emotion/react";
import "../assets/styles/Main.scss";
import MyImage from "../assets/images/me.jpeg";

function Main() {
  const [messages, setMessages] = React.useState([]); // Stores chat history
  const [input, setInput] = React.useState(""); // Stores user input
  const [loading, setLoading] = React.useState(false); // Stores user input
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  // Function to handle sending a message
  const sendMessage = async () => {
    if (!input.trim()) return; // Don't send empty messages

    setLoading(true);
    // Add the user's message to the chat history
    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Clear the input field
    setInput("");

    try {
      const resp = await axios.post(
        "https://yg-portfolio-gemini.onrender.com/predict",
        {
          input_text: input,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Add the AI's response to the chat history
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: resp.data.response, sender: "ai" },
      ]);

      scrollToBottom();
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
            <p>Full Stack Engineer</p>

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
          {/* Toggle Button - Only visible on screens below 768px */}
          <div className="chat-toggle-container">
            {!isModalOpen && (
              <div className="chat-toggle-tooltip">
                Ask me anything about me!
              </div>
            )}
            <button className="chat-toggle-btn" onClick={toggleModal}>
              {isModalOpen ? (
                <CloseIcon fontSize="large" />
              ) : (
                <AssistantIcon fontSize="large" />
              )}
            </button>
          </div>

          {/* Chat container that acts as modal on small screens */}
          <div className={`chat-modal ${isModalOpen ? "open" : ""}`}>
            <div className="right-side">
              <div className="chat-container">
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
