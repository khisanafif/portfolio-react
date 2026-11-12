import Tilt3D from "../../components/Tilt3D";
import { useApp } from "../../context/AppContext";
import { translations } from "../../data/translations";

export default function AchievementList() {
  const { lang } = useApp();
  const t = translations[lang].awards;

  return (
    <section className="achievement--section" id="achievement">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">{t.subTitle}</p>
          <h2 className="sections--heading">{t.heading}</h2>
        </div>
      </div>
      <ul className="achievement--section--container">
        {t.items.map((item, index) => (
          <li key={index} className="achievement--list-item">
            <Tilt3D
              className="achievement--section--card"
              maxTilt={6}
              scale={1.02}
            >
              <div className="achievement--section--card--img-wrap">
                <img
                  src={item.certificateImage}
                  alt={item.achievementName}
                  className="achievement--section--card--image"
                  loading="lazy"
                />
              </div>
              <div className="achievement--section--card--content layer-3d-mid">
                <span className="achievement--year">{item.year}</span>
                <h3 className="achievement--title">{item.achievementName}</h3>
                <p className="achievement--author--designation">{item.author}</p>
              </div>
            </Tilt3D>
          </li>
        ))}
      </ul>
    </section>
  );
}
