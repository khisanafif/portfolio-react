import { Link } from "react-scroll";
import Tilt3D from "../../components/Tilt3D";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--bg-orb hero--bg-orb-1" aria-hidden="true"></div>
      <div className="hero--bg-orb hero--bg-orb-2" aria-hidden="true"></div>

      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <span className="hero--badge">
            <span className="hero--badge--dot"></span>
            Jember, East Java, Indonesia • GPA 3.82/4.00
          </span>
          <p className="section--title">Hey, I'm Khisan Afif Ainur Rohim</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">
              UX Researcher &amp;
            </span>{" "}
            <br />
            UX Writer
          </h1>
          <p className="hero--section-description">
            Information Technology undergraduate at Jember University specialized
            in translating user research into data-driven design strategies,
            intuitive information architecture, and precise UX writing.
          </p>
        </div>
        <div className="hero--cta-group">
          <Link
            to="Contact"
            smooth={true}
            offset={-80}
            duration={500}
            className="btn btn-primary btn-3d"
          >
            Get In Touch
          </Link>
          <Link
            to="MyPortfolio"
            smooth={true}
            offset={-80}
            duration={500}
            className="btn btn-outline-primary"
          >
            Explore UX Projects
          </Link>
        </div>
      </div>

      <div className="hero--section--img">
        <Tilt3D className="hero--3d-stage" maxTilt={9} scale={1.03}>
          <div className="hero--3d-backdrop" aria-hidden="true"></div>
          <div className="hero--3d-cube" aria-hidden="true">
            <div className="cube-face cube-front"></div>
            <div className="cube-face cube-back"></div>
            <div className="cube-face cube-right"></div>
            <div className="cube-face cube-left"></div>
            <div className="cube-face cube-top"></div>
            <div className="cube-face cube-bottom"></div>
          </div>
          <img
            src="./img/hero_img.png"
            alt="Khisan Afif Hero"
            className="hero--3d-image"
          />
          <div className="hero--floating-chip hero--chip-top">
            <span className="chip-icon">🔍</span>
            <span>UX Research &amp; Writing</span>
          </div>
          <div className="hero--floating-chip hero--chip-bottom">
            <span className="chip-icon">🏆</span>
            <span>Mawapres Finalist</span>
          </div>
        </Tilt3D>
      </div>
    </section>
  );
}
