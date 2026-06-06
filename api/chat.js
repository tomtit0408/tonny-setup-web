import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      reply: "Method not allowed",
    });
  }

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

Gói dịch vụ:
- Basic Setup: từ 199.000đ
- Pro Setup: từ 499.000đ
- Premium Room: liên hệ báo giá

Phong cách trả lời:
- Trả lời bằng tiếng Việt tự nhiên.
- Ngắn gọn, thân thiện, dễ hiểu.
- Tư vấn như nhân viên chăm sóc khách hàng.
- Không trả lời quá dài.
- Luôn hỏi thêm nhu cầu, khu vực, loại setup và tình trạng hiện tại.
- Khuyến khích khách gửi ảnh/video góc setup hiện tại để tư vấn chính xác hơn.
- Không bịa giá chi tiết.
- Nếu khách muốn đặt lịch, hãy xin: họ tên, số điện thoại, khu vực, loại setup.

Khách hàng hỏi:
${message}
`;

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return res.status(200).json({
      reply:
        result.text ||
        "Mình chưa hiểu rõ nhu cầu của bạn. Bạn có thể mô tả setup hiện tại để Tonny Setup tư vấn chính xác hơn.",
    });
  } catch (error) {
    console.error("Gemini error:", error);

    return res.status(500).json({
      reply:
        "Chatbot đang gặp lỗi kết nối Gemini API. Bạn kiểm tra API key hoặc thử lại sau nhé.",
    });
  }
}