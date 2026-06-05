const steps = [
  {
    title: "Tiếp nhận nhu cầu khách hàng",
    desc: "Khách liên hệ qua Facebook, TikTok, Zalo, website hoặc giới thiệu. Team ghi nhận nhu cầu ban đầu.",
  },
  {
    title: "Khảo sát setup qua ảnh/video",
    desc: "Khách gửi hình ảnh hoặc video góc setup hiện tại để Tonny Setup đánh giá tình trạng dây, ổ cắm và thiết bị.",
  },
  {
    title: "Tư vấn phương án phù hợp",
    desc: "Team đề xuất cách đi dây, bố trí thiết bị, phụ kiện cần dùng và phong cách setup phù hợp.",
  },
  {
    title: "Báo giá dịch vụ",
    desc: "Chi phí được báo theo mức độ phức tạp, số lượng thiết bị, thời gian thi công và nhu cầu cá nhân hóa.",
  },
  {
    title: "Thi công tận nơi",
    desc: "Tonny Setup đến trực tiếp để đi dây, cố định dây, tối ưu ổ cắm, vệ sinh và sắp xếp lại không gian.",
  },
  {
    title: "Bàn giao & hỗ trợ sau dịch vụ",
    desc: "Team kiểm tra lại cùng khách hàng, hướng dẫn sử dụng và hỗ trợ nếu khách cần điều chỉnh thêm.",
  },
];

function Process() {
  return (
    <section className="section" id="process">
      <div className="section-title">
        <p>Quy trình</p>
        <h2>Quy trình vận hành rõ ràng và chuyên nghiệp</h2>
      </div>

      <div className="process-grid">
        {steps.map((item, index) => (
          <div className="process-card" key={index}>
            <span className="process-number">0{index + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;