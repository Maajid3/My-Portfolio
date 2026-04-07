import { useState } from "react";
import ProfilePic from "../assets/profile-img.avif";
import GlareHover from "./GlareHover";
import "../styles/components.css";

export default function LandingPage() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <>
      <div className="landing-ui" id="landing-page">
        <div className="hero-ui">
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.8}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <div className="hero-image-shell">
              {!isImageLoaded && (
                <span className="hero-image-skeleton" aria-hidden="true" />
              )}
              <img
                className={`hero-image ${isImageLoaded ? "is-loaded" : ""}`}
                src={ProfilePic}
                alt="Portrait of Maajid Ali"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                onLoad={() => setIsImageLoaded(true)}
                onError={() => setIsImageLoaded(true)}
              />
            </div>
          </GlareHover>
          <h2>Hello, I am</h2>
          <h1>Maajid Ali</h1>
          <p>Frontend Developer | React.js | UI Developer | Django </p>
        </div>
      </div>
    </>
  );
}
