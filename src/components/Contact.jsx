function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-title">
        <p>Liên hệ</p>
        <h2>Gửi ảnh setup của bạn để nhận tư vấn miễn phí</h2>
      </div>

      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Tonny Setup sẽ tư vấn dựa trên setup thật của bạn</h3>

          <p>
            Bạn chỉ cần gửi thông tin cơ bản và mô tả nhu cầu. Team sẽ tư vấn
            hướng xử lý dây, phụ kiện cần dùng và gói dịch vụ phù hợp.
          </p>

          <div className="contact-note">
            <strong>Gợi ý:</strong>
            <span>
              Hãy chụp ảnh góc setup hiện tại từ 2-3 góc để team dễ tư vấn hơn.
            </span>
          </div>

          <div className="contact-channels">
            <a href="https://www.facebook.com/lpm.2194">Facebook</a>
            <a href="https://www.tiktok.com/@tonyy.setup04/video/7444145909341932808?_r=1&_t=ZS-96xZopydIRR">TikTok</a>
            <a href="https://zalo.me/0987654321">Zalo</a>
            <a href="https://www.instagram.com/tonyy.setup04/">Instagram</a>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Họ và tên" />
          <input type="tel" placeholder="Số điện thoại" />
          <input type="text" placeholder="Khu vực của bạn" />

          <select defaultValue="">
            <option value="" disabled>
              Chọn loại setup
            </option>
            <option>PC Setup</option>
            <option>Gaming Setup</option>
            <option>Workspace</option>
            <option>Streamer Room</option>
            <option>Creator Studio</option>
            <option>Văn phòng nhỏ</option>
          </select>

          <textarea placeholder="Mô tả nhu cầu của bạn"></textarea>

          <button type="submit">Gửi tư vấn</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;