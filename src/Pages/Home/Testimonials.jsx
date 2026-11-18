import { useState, useEffect } from "react";
import Tilt3D from "../../components/Tilt3D";
import { useApp } from "../../context/AppContext";
import { translations } from "../../data/translations";

export default function AchievementList() {
  const { lang } = useApp();
  const t = translations[lang].awards;
  const [selectedAward, setSelectedAward] = useState(null);

  useEffect(() => {
    if (!selectedAward) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelectedAward(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedAward]);

  return (
    <section className="achievement--section" id="achievement">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">{t.subTitle}</p>
          <h2 className="sections--heading">{t.heading}</h2>
        </div>
      </div>

      <ul className="achievement--section--container">
        {t.items.map((item, index) => {
          const isFeatured = t.items.length % 2 === 1 && index === 0;
          return (
            <li
              key={index}
              className={`achievement--list-item ${
                isFeatured ? "achievement--list-item--featured" : ""
              }`}
            >
              <Tilt3D
                className={`achievement--section--card ${
                  isFeatured ? "achievement--card--featured" : ""
                }`}
                maxTilt={isFeatured ? 3 : 5}
                scale={1.015}
              >
                <button
                  type="button"
                  className="achievement--section--card--img-wrap"
                  onClick={() => setSelectedAward(item)}
                  aria-label={`${t.viewCertificate}: ${item.achievementName}`}
                >
                  <img
                    src={item.certificateImage}
                    alt={item.achievementName}
                    className="achievement--section--card--image"
                  />
                  <span className="achievement--zoom-pill">
                    {t.viewCertificate}
                  </span>
                </button>
                <div className="achievement--section--card--content layer-3d-mid">
                  <div className="achievement--badges-row">
                    <span className="achievement--year">{item.year}</span>
                    {isFeatured && (
                      <span className="achievement--featured-badge">
                        ★ {t.featuredLabel}
                      </span>
                    )}
                  </div>
                  <h3 className="achievement--title">
                    {item.achievementName}
                  </h3>
                  <p className="achievement--author--designation">
                    {item.author}
                  </p>
                </div>
              </Tilt3D>
            </li>
          );
        })}
      </ul>

      {selectedAward && (
        <div
          className="certificate-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={selectedAward.achievementName}
          onClick={() => setSelectedAward(null)}
        >
          <div
            className="certificate-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="certificate-modal-close"
              onClick={() => setSelectedAward(null)}
              aria-label={t.closeModal}
            >
              ✕
            </button>
            <img
              src={selectedAward.certificateImage}
              alt={selectedAward.achievementName}
              className="certificate-modal-image"
            />
            <div className="certificate-modal-caption">
              <span className="achievement--year">{selectedAward.year}</span>
              <h4>{selectedAward.achievementName}</h4>
              <p>{selectedAward.author}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
