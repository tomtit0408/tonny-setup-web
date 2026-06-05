function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-title">
        <p>Giới thiệu</p>
        <h2>Tonny Setup là gì?</h2>
      </div>

      <div className="about-layout">
        <div className="about-left">
          <p className="about-label">TONNY SETUP</p>

          <h3>Giải pháp setup không gian công nghệ cá nhân hóa</h3>

          <p>
            Tonny Setup là dự án cung cấp dịch vụ đi dây, tối ưu và cá nhân hóa
            không gian công nghệ cho khách hàng sử dụng PC, gaming setup, góc
            làm việc, streamer room, creator studio và văn phòng nhỏ.
          </p>

          <p>
            Chúng tôi bắt đầu từ nhu cầu thực tế: nhiều người dùng PC có nhiều
            thiết bị như màn hình, loa, bàn phím, chuột, đèn LED, ổ cắm và phụ
            kiện, nhưng dây điện lại lộn xộn, khó vệ sinh và làm cho không gian
            thiếu thẩm mỹ.
          </p>

          <p>
            Tonny Setup không chỉ giúp góc setup trở nên gọn gàng hơn, mà còn
            hướng đến việc thiết kế một không gian phù hợp với sở thích, phong
            cách và mục đích sử dụng riêng của từng khách hàng.
          </p>

          <div className="about-features">
            <div>
              <strong>Setup</strong>
              <span>Hệ thống mạng và thiết bị</span>
            </div>

            <div>
              <strong>Cable Management</strong>
              <span>Đi dây gọn gàng, khoa học</span>
            </div>

            <div>
              <strong>Solutions</strong>
              <span>Giải pháp tối ưu, hiệu quả</span>
            </div>

            <div>
              <strong>Support</strong>
              <span>Đồng hành dài lâu</span>
            </div>
          </div>
        </div>

        <div className="about-right">
          <img src="/images/about-team.png" alt="Tonny Setup Team" />
        </div>
      </div>
    </section>
  );
}

export default About;