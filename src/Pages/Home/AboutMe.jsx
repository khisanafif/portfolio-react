import Tilt3D from "../../components/Tilt3D";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <Tilt3D className="about--3d-frame" maxTilt={8} scale={1.02}>
          <div className="about--3d-glow" aria-hidden="true"></div>
          <img
            src="./img/about-me.png"
            alt="About Me"
            className="about--3d-image"
          />
        </Tilt3D>
      </div>
      <div className="about--section--content--box">
        <div className="about--section--content">
          <p className="sub--title">About</p>
          <h2 className="sections--heading">About Me</h2>
          <p className="hero--section-description">
            I am a student majoring in Information Technology at Jember
            University. Passionate about learning and innovation, I excel in
            teamwork, effective communication, and responsibility. Eager to
            leverage my skills in programming, team management, and creative
            problem-solving to contribute to impactful projects.
          </p>
          <div className="about--highlights">
            <div className="about--highlight-card">
              <span className="about--highlight-value">6+</span>
              <span className="about--highlight-label">Projects Built</span>
            </div>
            <div className="about--highlight-card">
              <span className="about--highlight-value">4+</span>
              <span className="about--highlight-label">National Awards</span>
            </div>
            <div className="about--highlight-card">
              <span className="about--highlight-value">UNEJ</span>
              <span className="about--highlight-label">IT Student</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
