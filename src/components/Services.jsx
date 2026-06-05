const services = [
  {
    title: "Đi dây PC chuyên nghiệp",
    desc: "Gom dây, giấu dây, cố định dây màn hình, loa, bàn phím, chuột và dây nguồn để góc setup gọn gàng hơn.",
  },
  {
    title: "Tối ưu ổ cắm & nguồn điện",
    desc: "Sắp xếp ổ điện, adapter, dây nguồn và thiết bị ngoại vi an toàn, dễ sử dụng và dễ bảo trì.",
  },
  {
    title: "Vệ sinh setup tận nơi",
    desc: "Làm sạch bàn, màn hình, dây điện, phụ kiện và khu vực setup để không gian luôn sạch và chuyên nghiệp.",
  },
  {
    title: "Thiết kế workspace cá nhân hóa",
    desc: "Tư vấn bố trí góc làm việc, học tập hoặc gaming theo sở thích, ngân sách và phong cách riêng của khách hàng.",
  },
  {
    title: "Gaming / Streamer Setup",
    desc: "Setup góc gaming, livestream, creator room với ánh sáng, camera, mic, LED và bố cục phù hợp.",
  },
  {
    title: "Build PC & phụ kiện",
    desc: "Hỗ trợ tư vấn build PC, chọn phụ kiện setup như arm màn hình, kẹp dây, LED, hub, ổ cắm và decor.",
  },
];

function Services() {
  return (
    <section className="section" id="services">
      <div className="section-title">
        <p>Dịch vụ</p>
        <h2>Tonny Setup giúp bạn tối ưu toàn bộ không gian công nghệ</h2>
      </div>

      <div className="grid-3">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">✦</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;