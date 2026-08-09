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
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message.trim(),
        }),
      });

      // Response ko safely read karo
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.reply || "AI service se response nahi aa raha."
        );
      }

      setReply(data?.reply || "Sorry, mujhe answer nahi mila.");
      setMessage("");
    } catch (error) {
      console.error("AI ERROR:", error);

      setReply(
        "❌ AI se connection nahi ho pa raha. Please try again."
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

          {/* HEADER */}

          <div className="ai-chat-header">
            <div>
              <h3>🤖 AI Assistant</h3>

              <span>CodeWithKhushi</span>
            </div>

            <button
              className="ai-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close AI Assistant"
            >
              ✕
            </button>
          </div>

          {/* CHAT BODY */}

          <div className="ai-chat-body">
            <div className="bot-message">
              <ReactMarkdown>
                {reply}
              </ReactMarkdown>
            </div>
          </div>

          {/* INPUT */}

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
              disabled={loading || !message.trim()}
              aria-label="Ask AI"
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