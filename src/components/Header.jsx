function Header() {
  return (
    <header className="header">
      <div className="logo">TONNY SETUP</div>

      <nav className="nav">
        <a href="#services">Dịch vụ</a>
        <a href="#about">Giới thiệu</a>
        <a href="#packages">Gói setup</a>
        <a href="#projects">Dự án</a>
        <a href="#process">Quy trình</a>
        <a href="#contact">Liên hệ</a>
      </nav>

      <a href="#contact" className="header-btn">
        Đặt lịch tư vấn
      </a>
    </header>
  );
}

export default Header;
