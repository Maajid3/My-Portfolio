import ProfilePic from "../assets/profile-pic.png";
import GlareHover from "./GlareHover";
import "../styles/components.css";


export default function LandingPage() {
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
            <img
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
              src={ProfilePic}
              alt=""
            />
          </GlareHover>
          <h2>Hello, I am</h2>
          <h1>Maajid Ali</h1>
          <p>Frontend Developer | React.js | UI Developer | Django </p>
        </div>
      </div>
    </>
  );
}
