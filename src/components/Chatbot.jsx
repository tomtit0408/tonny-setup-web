import { useState } from "react";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Xin chào! Mình là trợ lý tư vấn của Tonny Setup. Bạn cần đi dây PC, setup gaming, workspace hay tư vấn gói dịch vụ?",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const quickQuestions = [
    "Tôi muốn đi dây PC",
    "Tôi muốn setup gaming",
    "Tôi muốn báo giá",
    "Tôi muốn gửi ảnh setup",
  ];

  const sendMessage = async (customMessage) => {
    const messageToSend = customMessage || input;

    if (!messageToSend.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: messageToSend,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: messageToSend,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: data.reply,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Không kết nối được chatbot. Bạn kiểm tra backend đã chạy ở cổng 5000 chưa nhé.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <>
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "×" : "💬"}
      </button>

      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <div>
              <h3>Tonny Setup AI</h3>
              <p>Tư vấn setup & đi dây</p>
            </div>

            <button onClick={() => setIsOpen(false)}>×</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                className={
                  msg.role === "user"
                    ? "message user-message"
                    : "message bot-message"
                }
                key={index}
              >
                {msg.text}
              </div>
            ))}

            {loading && <div className="message bot-message">Đang tư vấn...</div>}
          </div>

          <div className="quick-questions">
            {quickQuestions.map((q, index) => (
              <button key={index} onClick={() => sendMessage(q)}>
                {q}
              </button>
            ))}
          </div>

          <form className="chatbot-input" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nhập câu hỏi của bạn..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button type="submit">Gửi</button>
          </form>
        </div>
      )}
    </>
  );
}

export default Chatbot;