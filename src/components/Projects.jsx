const projects = [
  {
    title: "Gaming Setup RGB",
    desc: "Không gian gaming với hệ thống LED, PC case RGB, màn hình kép và bàn setup tối ưu.",
    image: "/images/setup-1.jpg",
    tag: "Gaming Setup",
  },
  {
    title: "Workspace hiện đại",
    desc: "Góc làm việc gọn gàng, tối ưu màn hình, bàn phím, chuột và không gian sử dụng.",
    image: "/images/setup-2.jpg",
    tag: "Workspace",
  },
  {
    title: "Minimal PC Setup",
    desc: "Phong cách tối giản, sạch sẽ, phù hợp học tập, làm việc và giải trí tại nhà.",
    image: "/images/setup-3.jpg",
    tag: "Minimal Setup",
  },
  {
    title: "Music Studio Setup",
    desc: "Không gian có thiết bị âm thanh, mixer, loa monitor và bố trí phù hợp cho sáng tạo âm nhạc.",
    image: "/images/setup-4.jpg",
    tag: "Studio Setup",
  },
  {
    title: "Premium Workspace",
    desc: "Góc làm việc cao cấp với bàn rộng, nhiều màn hình và không gian cá nhân hóa.",
    image: "/images/setup-5.jpg",
    tag: "Premium Room",
  },
  {
    title: "White Gaming Setup",
    desc: "Setup tone trắng, LED tím, bố cục cân đối và phù hợp với phòng cá nhân.",
    image: "/images/setup-6.jpg",
    tag: "Gaming Room",
  },
  {
    title: "Dark Tech Setup",
    desc: "Phong cách tối, mạnh mẽ, ánh sáng tập trung và không gian công nghệ cá tính.",
    image: "/images/setup-7.jpg",
    tag: "Dark Tech",
  },
  {
    title: "Creator Setup",
    desc: "Không gian hỗ trợ làm nội dung, livestream, học tập và giải trí với nhiều thiết bị.",
    image: "/images/setup-8.jpg",
    tag: "Creator Room",
  },
  {
    title: "Dual Monitor Setup",
    desc: "Setup nhiều màn hình, PC hiệu năng cao, tối ưu không gian làm việc và chơi game.",
    image: "/images/setup-9.jpg",
    tag: "Dual Monitor",
  },
];

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-title">
        <p>Dự án đã thực hiện</p>
        <h2>Một số không gian setup Tonny Setup đã triển khai</h2>
      </div>

      <div className="project-gallery">
        {projects.map((item, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={item.image} alt={item.title} />
              <span>{item.tag}</span>
            </div>

            <div className="project-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;