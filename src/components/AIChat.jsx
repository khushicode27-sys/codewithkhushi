import { useState } from "react";
import ReactMarkdown from "react-markdown";
import "../styles/AIChat.css";

function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState(
    "👋 Hello! Ask me anything about Coding, AI or Robotics."
  );
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!message.trim() || loading) return;

    setLoading(true);
    setReply("🤔 Thinking...");

    try {
      const response = await fetch(
        `http://${window.location.hostname}:5000/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: message,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.reply || "Something went wrong");
      }

      setReply(data.reply);
      setMessage("");
    } catch (error) {
      console.error(error);

      setReply(
        "❌ AI se connection nahi ho pa raha. Please check karo ki server running hai."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !loading) {
      askAI();
    }
  };

  return (
    <>
      {/* FLOATING AI BUTTON */}

      <button
        className="ai-floating-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Assistant"
      >
        {isOpen ? "✕" : "🤖"}
      </button>

      {/* AI CHAT WINDOW */}

      {isOpen && (
        <div className="ai-floating-chat">

          <div className="ai-chat-header">
            <div>
              <h3>🤖 AI Assistant</h3>
              <span>CodeWithKhushi</span>
            </div>

            <button
              className="ai-close"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="ai-chat-body">

            <div className="bot-message">
              <ReactMarkdown>
                {reply}
              </ReactMarkdown>
            </div>

          </div>

          <div className="ai-chat-input">

            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask your question..."
              disabled={loading}
            />

            <button
              onClick={askAI}
              disabled={loading}
            >
              {loading ? "..." : "➤"}
            </button>

          </div>

        </div>
      )}
    </>
  );
}

export default AIChat;