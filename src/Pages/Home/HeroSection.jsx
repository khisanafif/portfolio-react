import { Link } from "react-scroll";
import Tilt3D from "../../components/Tilt3D";
import { useApp } from "../../context/AppContext";
import { translations } from "../../data/translations";

export default function HeroSection() {
  const { lang } = useApp();
  const t = translations[lang].hero;

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--bg-orb hero--bg-orb-1" aria-hidden="true"></div>
      <div className="hero--bg-orb hero--bg-orb-2" aria-hidden="true"></div>

      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <span className="hero--badge">
            <span className="hero--badge--dot"></span>
            {t.badge}
          </span>
          <p className="section--title">{t.greeting}</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">
              {t.titleHighlight}
            </span>{" "}
            <br />
            {t.titleMain}
          </h1>
          <p className="hero--section-description">{t.description}</p>
        </div>
        <div className="hero--cta-group">
          <Link
            to="Contact"
            smooth={true}
            offset={-80}
            duration={500}
            className="btn btn-primary btn-3d"
          >
            {t.ctaPrimary}
          </Link>
          <Link
            to="MyPortfolio"
            smooth={true}
            offset={-80}
            duration={500}
            className="btn btn-outline-primary"
          >
            {t.ctaSecondary}
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
            <span className="chip-icon">📊</span>
            <span>{t.chipTop}</span>
          </div>
          <div className="hero--floating-chip hero--chip-bottom">
            <span className="chip-icon">🏆</span>
            <span>{t.chipBottom}</span>
          </div>
        </Tilt3D>
      </div>
    </section>
  );
}
