const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { GoogleGenAI } = require("@google/genai");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({
        reply: "Bạn hãy nhập nội dung cần tư vấn nhé.",
      });
    }

    const prompt = `
Bạn là chatbot tư vấn cho dự án Tonny Setup.

Thông tin dự án:
Tonny Setup cung cấp dịch vụ:
- Đi dây PC chuyên nghiệp
- Tối ưu ổ cắm và dây nguồn
- Vệ sinh setup
- Thiết kế gaming setup
- Thiết kế workspace
- Streamer room
- Creator room
- Văn phòng nhỏ
- Build PC
- Tư vấn và bán phụ kiện công nghệ

Phong cách trả lời:
- Trả lời bằng tiếng Việt tự nhiên.
- Ngắn gọn, thân thiện, dễ hiểu.
- Tư vấn như nhân viên chăm sóc khách hàng.
- Không trả lời quá dài.
- Luôn hỏi thêm nhu cầu, khu vực, loại setup và tình trạng hiện tại.
- Khuyến khích khách gửi ảnh/video góc setup hiện tại để tư vấn chính xác hơn.
- Không bịa giá chi tiết.
- Chỉ nói: Basic từ 199.000đ, Pro từ 499.000đ, Premium liên hệ báo giá.
- Nếu khách muốn đặt lịch, hãy xin: họ tên, số điện thoại, khu vực, loại setup.

Khách hàng hỏi:
${message}
`;

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({
      reply:
        result.text ||
        "Mình chưa hiểu rõ nhu cầu của bạn. Bạn có thể mô tả setup hiện tại để Tonny Setup tư vấn chính xác hơn.",
    });
  } catch (error) {
    console.error("Gemini error:", error);

    res.status(500).json({
      reply:
        "Chatbot đang gặp lỗi kết nối Gemini API. Bạn kiểm tra API key hoặc thử lại sau nhé.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});