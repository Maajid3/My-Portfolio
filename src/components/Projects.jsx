import { lazy, Suspense, useEffect, useState } from "react";
import "../styles/components.css";
import FallbackLoader from "./FallbackLoader";

const ProjectLink = lazy(() => import("./ProjectLink"));
const ScrollFloat = lazy(() => import("./ScrollFloat"));
const ElectricBorder = lazy(() => import("./ElectricBorder"));

function Project() {
  const [key, setKey] = useState(0);
  const [projectsData, setProjectsData] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    import("../data")
      .then((module) => {
        if (isMounted) {
          setProjectsData(module.default);
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsDataLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 7000);

    return () => clearInterval(interval);
  }, []);
  if (isDataLoading) {
    return (
      <div className="project" id="project">
        <section className="heading">
          <h2>Projects</h2>
        </section>
        <FallbackLoader message="Loading projects..." />
      </div>
    );
  }

  return (
    <>
      <div className="project" id="project">
        <section className="heading">
          <Suspense
            fallback={<FallbackLoader compact message="Loading title" />}
          >
            <ScrollFloat
              animationDuration={0}
              ease="power2.out"
              scrollStart="top bottom"
              scrollEnd="bottom center"
              stagger={0.05}
            >
              Projects
            </ScrollFloat>
          </Suspense>
        </section>
        {projectsData.map((items) => (
          <Suspense
            fallback={<FallbackLoader message="Loading project card..." />}
            key={items.id}
          >
            <ElectricBorder
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
                  <Suspense
                    fallback={<FallbackLoader compact message="Loading link" />}
                  >
                    <ProjectLink
                      key={key}
                      text="Have a Look ->"
                      delay={600}
                      animateBy="words"
                      direction="bottom"
                    />
                  </Suspense>
                </a>
              </div>
            </ElectricBorder>
          </Suspense>
        ))}
      </div>
    </>
  );
}

export default Project;
