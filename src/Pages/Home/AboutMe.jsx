import Tilt3D from "../../components/Tilt3D";
import { useApp } from "../../context/AppContext";
import { translations } from "../../data/translations";

export default function AboutMe() {
  const { lang } = useApp();
  const t = translations[lang].about;

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
          <p className="sub--title">{t.subTitle}</p>
          <h2 className="sections--heading">{t.heading}</h2>
          <p className="hero--section-description">{t.description}</p>

          <div className="about--education-card">
            <div className="about--education-header">
              <div>
                <h3 className="about--education-school">{t.school}</h3>
                <p className="about--education-degree">{t.degree}</p>
              </div>
              <span className="about--education-period">{t.period}</span>
            </div>
            <p className="about--education-gpa">{t.gpa}</p>
            <ul className="about--education-awards">
              {t.eduAwards.map((award, idx) => (
                <li key={idx}>{award}</li>
              ))}
            </ul>
          </div>

          <div className="about--highlights">
            {t.highlights.map((item, idx) => (
              <div key={idx} className="about--highlight-card">
                <span className="about--highlight-value">{item.value}</span>
                <span className="about--highlight-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
