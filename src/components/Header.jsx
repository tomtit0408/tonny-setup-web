import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <a href="#" className="logo" onClick={closeMenu}>
        TONNY SETUP
      </a>

      <nav className={isMenuOpen ? "nav nav-open" : "nav"}>
        <a href="#services" onClick={closeMenu}>
          Dịch vụ
        </a>

        <a href="#about" onClick={closeMenu}>
          Giới thiệu
        </a>

        <a href="#packages" onClick={closeMenu}>
          Gói setup
        </a>

        <a href="#process" onClick={closeMenu}>
          Quy trình
        </a>

        <a href="#projects" onClick={closeMenu}>
          Dự án
        </a>

        <a href="#contact" onClick={closeMenu}>
          Liên hệ
        </a>
      </nav>

      <a href="#contact" className="header-btn">
        Đặt lịch tư vấn
      </a>

      <button
        className={isMenuOpen ? "menu-toggle active" : "menu-toggle"}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isMenuOpen && <div className="menu-backdrop" onClick={closeMenu}></div>}
    </header>
  );
}

export default Header;