import "./components.css";
import data from "../data";

function Project() {
  return (
    <>
      <div className="project" id="project">
        {data.map((items) => (
          <div className="project-container" key={items.id}>
            {items.projectImg.length > 1 ? (
              <div className="slideshow">
                <div className="slide-track">
                  {[...items.projectImg, ...items.projectImg].map((img, i) => (
                    <img key={i} src={img} alt="project" />
                  ))}
                </div>
              </div>
            ) : (
              <img
                src={items.projectImg[0]}
                alt="project"
                className="single-img"
              />
            )}

            <h2>{items.projectName}</h2>
            <p>{items.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Project;
