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
            Available for Projects &amp; Collaboration
          </span>
          <p className="section--title">Hey, I'm Khisan Afif Ainur Rohim</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Learning to be</span>{" "}
            <br />
            Full Stack Developer
          </h1>
          <p className="hero--section-description">
            Undergraduate Student of Information Technology, Universitas Jember.
            Passionate about crafting modern web experiences, UI/UX research, and
            impactful digital products.
          </p>
        </div>
        <div className="hero--cta-group">
          <Link
            to="Contact"
            smooth={true}
            offset={-70}
            duration={500}
            className="btn btn-primary btn-3d"
          >
            Get In Touch
          </Link>
          <Link
            to="MyPortfolio"
            smooth={true}
            offset={-70}
            duration={500}
            className="btn btn-outline-primary"
          >
            Explore Projects
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
            <span className="chip-icon">⚡</span>
            <span>Full Stack Dev</span>
          </div>
          <div className="hero--floating-chip hero--chip-bottom">
            <span className="chip-icon">🎨</span>
            <span>UI/UX &amp; Research</span>
          </div>
        </Tilt3D>
      </div>
    </section>
  );
}
