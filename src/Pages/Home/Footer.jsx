import { Link, animateScroll as scroll } from "react-scroll";
import React from "react";
import { useApp } from "../../context/AppContext";
import { translations } from "../../data/translations";

function Footer() {
  const { lang } = useApp();
  const navT = translations[lang].nav;
  const footT = translations[lang].footer;

  const footerLinks = [
    { to: "heroSection", label: navT.home },
    { to: "mySkills", label: navT.skills },
    { to: "AboutMe", label: navT.about },
    { to: "Experience", label: navT.experience },
    { to: "MyPortfolio", label: navT.projects },
    { to: "achievement", label: navT.awards },
    { to: "Contact", label: navT.contact },
  ];

  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div className="footer--brand-wrap">
          <img
            className="footer--logo-img"
            src="./img/logo.png"
            alt="Portfolio Khisan"
          />
          <div>
            <p className="footer--brand-name">Khisan Afif</p>
            <p className="footer--brand-tagline">{footT.tagline}</p>
          </div>
        </div>

        <div className="footer--items">
          <ul>
            {footerLinks.map((item) => (
              <li key={item.to}>
                <Link
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  to={item.to}
                  className="text-md"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="mailto:khisanafif32@gmail.com"
                className="footer--social-btn"
                aria-label="Email khisanafif32@gmail.com"
                title="khisanafif32@gmail.com"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/khisanafif"
                className="footer--social-btn"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn @khisanafif"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/khisanafif"
                className="footer--social-btn"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub @khisanafif"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/khisanafif"
                className="footer--social-btn"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram @khisanafif"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="divider" />

      <div className="footer--content--container">
        <p className="footer--content">
          {footT.madeWith} • {footT.copyright}
        </p>
        <div className="footer--bottom-links">
          <a href="mailto:khisanafif32@gmail.com" className="text-sm footer--bottom-link">
            khisanafif32@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/khisanafif"
            target="_blank"
            rel="noreferrer"
            className="text-sm footer--bottom-link"
          >
            LinkedIn
          </a>
          <button
            type="button"
            onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
            className="text-sm footer--top-btn"
          >
            ↑ {footT.backToTop}
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
