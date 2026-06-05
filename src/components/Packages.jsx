const packages = [
  {
    name: "Basic Setup",
    price: "Từ 199.000đ",
    target: "Phù hợp với sinh viên, người dùng PC cơ bản hoặc góc học tập nhỏ.",
    features: [
      "Gom dây màn hình, chuột, bàn phím",
      "Cố định dây dưới bàn",
      "Sắp xếp ổ cắm cơ bản",
      "Tư vấn phụ kiện cần thiết",
    ],
  },
  {
    name: "Pro Setup",
    price: "Từ 499.000đ",
    target: "Phù hợp với gamer, designer, creator hoặc người dùng nhiều thiết bị.",
    features: [
      "Đi dây nâng cao",
      "Tối ưu ổ điện và adapter",
      "Bố trí lại thiết bị trên bàn",
      "Tư vấn LED, decor và phụ kiện",
    ],
  },
  {
    name: "Premium Room",
    price: "Liên hệ báo giá",
    target: "Phù hợp với streamer, creator, văn phòng nhỏ hoặc phòng cá nhân hóa.",
    features: [
      "Thiết kế layout không gian",
      "Setup trọn gói phòng",
      "Tối ưu ánh sáng, âm thanh, thiết bị",
      "Hỗ trợ build PC và mua phụ kiện",
    ],
  },
];

function Packages() {
  return (
    <section className="section" id="packages">
      <div className="section-title">
        <p>Gói setup</p>
        <h2>Lựa chọn gói dịch vụ phù hợp với nhu cầu của bạn</h2>
      </div>

      <div className="grid-3">
        {packages.map((item, index) => (
          <div className="package-card" key={index}>
            <div className="package-top">
              <h3>{item.name}</h3>
              <h4>{item.price}</h4>
            </div>

            <p className="package-target">{item.target}</p>

            <ul>
              {item.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>

            <a href="#contact" className="package-btn">
              Đặt gói này
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Packages;