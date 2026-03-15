import { useState } from "react";
import "./portfolio.css";

const InfoProjectSlider = () => {
  const projects = [
    { title: "Project One", description: "Dummy description for project one." },
    { title: "Project Two", description: "Dummy description for project two." },
    { title: "Project Three", description: "Dummy description for project three." },
    { title: "Project Four", description: "Dummy description for project four." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollCooldown, setScrollCooldown] = useState(false);

  const handleWheel = (e) => {
    if (scrollCooldown) return;

    if (e.deltaY > 0) {
      setCurrentIndex((prev) => Math.min(prev + 1, projects.length - 1));
    } else {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }

    setScrollCooldown(true);
    setTimeout(() => setScrollCooldown(false), 600);
  };

  return (
    <section className="info-project-section" onWheel={handleWheel}>
      {/* Left info */}
      <div className="info-side">
        <h2>Our Projects</h2>
        <p>
          Explore the projects we have delivered. Each project is built with
          cutting-edge technology and designed to deliver results.
        </p>
      </div>

      {/* Right vertical slider */}
      <div className="project-side">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${
              index === currentIndex ? "active" : "inactive"
            }`}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoProjectSlider;