import Tilt3D from "../../components/Tilt3D";
import { useApp } from "../../context/AppContext";
import { translations } from "../../data/translations";

export default function MySkills() {
  const { lang } = useApp();
  const t = translations[lang].skills;

  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="sub--title">{t.subTitle}</p>
        <h2 className="skills--section--heading">{t.heading}</h2>
      </div>
      <div className="skills--section--container">
        {t.items.map((item, index) => (
          <Tilt3D
            key={item.id || index}
            className="skills--section--card"
            maxTilt={8}
            scale={1.03}
          >
            <div className="skills--section--img layer-3d-pop">
              <img src={item.src} alt={item.title} />
            </div>
            <div className="skills--section--card--content layer-3d-mid">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
              {item.tags && (
                <div className="skills--tags">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="skills--tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Tilt3D>
        ))}
      </div>
    </section>
  );
}
