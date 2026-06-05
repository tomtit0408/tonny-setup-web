function VideoHero() {
  return (
    <section className="video-section">
      <div className="video-wrapper">
        <video
          className="intro-video"
          src="/videos/tonny-intro.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
        />
      </div>

      <div className="video-text">
        <p className="tagline">PC · Gaming · Workspace · Creator Room</p>

        <h1>Biến góc công nghệ của bạn thành không gian chuyên nghiệp</h1>

        <p>
          Tonny Setup cung cấp dịch vụ đi dây PC, tối ưu ổ cắm, vệ sinh setup
          và thiết kế không gian công nghệ cá nhân hóa.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="primary-btn">
            Đặt lịch tư vấn
          </a>

          <a href="#projects" className="secondary-btn">
            Xem dự án đã làm
          </a>
        </div>
      </div>
    </section>
  );
}

export default VideoHero;