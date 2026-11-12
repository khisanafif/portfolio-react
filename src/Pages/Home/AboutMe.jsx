import Tilt3D from "../../components/Tilt3D";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <Tilt3D className="about--3d-frame" maxTilt={8} scale={1.02}>
          <div className="about--3d-glow" aria-hidden="true"></div>
          <img
            src="./img/about-me.png"
            alt="Khisan Afif Ainur Rohim"
            className="about--3d-image"
          />
        </Tilt3D>
      </div>
      <div className="about--section--content--box">
        <div className="about--section--content">
          <p className="sub--title">About &amp; Education</p>
          <h2 className="sections--heading">About Me</h2>
          <p className="hero--section-description">
            UX Researcher &amp; UX Writer with a strong foundation in
            Information Technology (GPA: 3.82/4.00, Jember University).
            Specialized in translating user research into data-driven design
            strategies, intuitive information architecture, and precise UX
            writing across gamification, smart city, tourism, and e-commerce
            domains.
          </p>

          <div className="about--education-card">
            <div className="about--education-header">
              <div>
                <h3 className="about--education-school">Jember University</h3>
                <p className="about--education-degree">
                  Undergraduate in Information Technology
                </p>
              </div>
              <span className="about--education-period">
                Aug 2022 – July 2026
              </span>
            </div>
            <p className="about--education-gpa">GPA: 3.82 / 4.00</p>
            <ul className="about--education-awards">
              <li>
                Finalist, Jember University Outstanding Student Award
                (Mahasiswa Berprestasi) – Representing Faculty of Computer
                Science (2025)
              </li>
              <li>
                2nd Place, Outstanding Student Award, Faculty of Computer
                Science, Jember University
              </li>
            </ul>
          </div>

          <div className="about--highlights">
            <div className="about--highlight-card">
              <span className="about--highlight-value">3.82</span>
              <span className="about--highlight-label">GPA / 4.00</span>
            </div>
            <div className="about--highlight-card">
              <span className="about--highlight-value">5+</span>
              <span className="about--highlight-label">National Awards</span>
            </div>
            <div className="about--highlight-card">
              <span className="about--highlight-value">200+</span>
              <span className="about--highlight-label">ICTVET Audience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
