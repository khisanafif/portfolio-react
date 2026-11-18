import { useState } from "react";
import Tilt3D from "../../components/Tilt3D";
import { useApp } from "../../context/AppContext";
import { translations } from "../../data/translations";

function GitHubIcon({ size = 20 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

export default function MyPortfolio() {
  const { lang } = useApp();
  const t = translations[lang].portfolio;
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? t.items
      : t.items.filter((item) => item.category === activeFilter);

  const getCount = (key) =>
    key === "all"
      ? t.items.length
      : t.items.filter((item) => item.category === key).length;

  const isTwoColGrid = filteredItems.length === 4;

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">{t.subTitle}</p>
          <h2 className="sections--heading">{t.heading}</h2>
        </div>
        <div className="portfolio--header-actions">
          <div
            className="portfolio--filters"
            role="tablist"
            aria-label="Project categories"
          >
            {t.filters.map((filter) => (
              <button
                key={filter.key}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter.key}
                className={`portfolio--filter-btn ${
                  activeFilter === filter.key ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter.key)}
              >
                <span>{filter.label}</span>
                <span className="portfolio--filter-count">
                  {getCount(filter.key)}
                </span>
              </button>
            ))}
          </div>
          <a
            href="https://github.com/khisanafif"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-github btn-3d"
          >
            <GitHubIcon size={20} />
            {t.githubBtn}
          </a>
        </div>
      </div>

      <div
        className={`portfolio--section--container ${
          isTwoColGrid ? "portfolio--grid--two" : ""
        }`}
      >
        {filteredItems.map((item, index) => {
          const isFeaturedSpotlight = activeFilter === "all" && index === 0;
          return (
            <Tilt3D
              key={item.id || index}
              className={`portfolio--section--card ${
                isFeaturedSpotlight ? "portfolio--card--featured" : ""
              }`}
              maxTilt={isFeaturedSpotlight ? 3 : 6}
              scale={isFeaturedSpotlight ? 1.01 : 1.02}
            >
              <div className="portfolio--section--img">
                <img src={item.src} alt={item.title} />
              </div>
              <div className="portfolio--section--card--content layer-3d-mid">
                <div className="portfolio--section--card--body">
                  <div className="portfolio--badge-row">
                    {isFeaturedSpotlight && (
                      <span className="portfolio--featured-tag">
                        ★ {t.featuredLabel}
                      </span>
                    )}
                    {item.badge && (
                      <span className="portfolio--badge">{item.badge}</span>
                    )}
                    <span className="portfolio--year">{item.year}</span>
                  </div>
                  <div className="portfolio--meta">
                    <span className="portfolio--role">{item.role}</span>
                  </div>
                  <h3 className="portfolio--section--title">{item.title}</h3>
                  <p className="text-md portfolio--section--description">
                    {item.description}
                  </p>
                  {Array.isArray(item.tools) && item.tools.length > 0 && (
                    <div className="portfolio--tools-list">
                      {item.tools.map((tool, tIdx) => (
                        <span key={tIdx} className="portfolio--tool-tag">
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="portfolio--card-links">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm portfolio--link"
                  >
                    {item.linkType === "github" && <GitHubIcon size={15} />}
                    <span>{item.link}</span>
                    <ArrowUpRightIcon />
                  </a>
                  {item.secondaryUrl && item.secondaryLink && (
                    <a
                      href={item.secondaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm portfolio--link portfolio--link-secondary"
                    >
                      {item.secondaryType === "github" && (
                        <GitHubIcon size={15} />
                      )}
                      <span>{item.secondaryLink}</span>
                      <ArrowUpRightIcon />
                    </a>
                  )}
                </div>
              </div>
            </Tilt3D>
          );
        })}
      </div>
    </section>
  );
}
