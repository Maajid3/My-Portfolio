import "../styles/components.css";
import data from "../data";
import ProjectLink from "./ProjectLink";
import { useEffect, useState } from "react";
import ScrollFloat from "./ScrollFloat";
import ElectricBorder from "./ElectricBorder";

function Project() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 7000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="project" id="project">
        <section className="heading">
          <ScrollFloat
            animationDuration={0}
            ease="power2.out"
            scrollStart="top bottom"
            scrollEnd="bottom center"
            stagger={0.05}
          >
            Projects
          </ScrollFloat>
        </section>
        {data.map((items) => (
          <ElectricBorder
            key={items.id}
            color="#2a7bfe"
            speed={1}
            chaos={0.16}
            thickness={10}
            style={{ borderRadius: 18 }}
          >
            <div className="project-container">
              {items.projectImg.length > 1 ? (
                <div className="slideshow">
                  <div className="slide-track">
                    {[...items.projectImg, ...items.projectImg].map(
                      (img, i) => (
                        <img key={i} src={img} alt="project" />
                      ),
                    )}
                  </div>
                </div>
              ) : (
                <img
                  src={items.projectImg[0]}
                  alt="project"
                  className="single-img"
                />
              )}

              <div className="project-content">
                <h2>{items.projectName}</h2>
                <p className="project-description">{items.description}</p>

                <div className="stack-section">
                  <span className="stack-title">Tech Stack</span>
                  <div className="stack-list">
                    {items.techStack.map((tech, index) => (
                      <span
                        className="stack-badge"
                        key={`${items.id}-${tech}-${index}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <a
                href={items.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-p"
              >
                <ProjectLink
                  key={key}
                  text="Have a Look ->"
                  delay={600}
                  animateBy="words"
                  direction="bottom"
                />
              </a>
            </div>
          </ElectricBorder>
        ))}
      </div>
    </>
  );
}

export default Project;
