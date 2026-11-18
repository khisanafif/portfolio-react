import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { useApp } from "../../context/AppContext";
import { translations } from "../../data/translations";

function SunIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, toggleTheme, lang, setLang } = useApp();
  const t = translations[lang].nav;
  const navRef = useRef(null);

  const toggleNav = () => {
    setNavActive((prev) => !prev);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        closeMenu();
      }
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 24);
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { to: "heroSection", label: t.home },
    { to: "mySkills", label: t.skills },
    { to: "AboutMe", label: t.about },
    { to: "Experience", label: t.experience },
    { to: "MyPortfolio", label: t.projects },
    { to: "achievement", label: t.awards },
  ];

  return (
    <header
      ref={navRef}
      className={`navbar-wrapper ${scrolled ? "is-scrolled" : ""}`}
    >
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
      <nav
        className={`navbar ${navActive ? "active" : ""} ${scrolled ? "navbar--scrolled" : ""
          }`}
        aria-label="Main navigation"
      >
        <Link
          to="heroSection"
          smooth={true}
          offset={-80}
          duration={500}
          onClick={closeMenu}
          className="navbar--logo"
          aria-label="Go to Home"
        >
          <img src="./img/logo.png" alt="Khisan Afif Logo" />
          <span className="navbar--brand">
            Khisan<span className="navbar--brand-dot">.</span>
          </span>
        </Link>

        <div className="navbar--mobile-controls">
          <div className="lang-pill" role="group" aria-label="Language switch">
            <button
              type="button"
              className={`lang-pill--btn ${lang === "id" ? "active" : ""}`}
              onClick={() => setLang("id")}
              aria-pressed={lang === "id"}
            >
              ID
            </button>
            <button
              type="button"
              className={`lang-pill--btn ${lang === "en" ? "active" : ""}`}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            className="navbar--icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle dark or light mode"
            title={theme === "light" ? "Dark Mode" : "Light Mode"}
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
          <button
            type="button"
            className={`nav__hamburger ${navActive ? "active" : ""}`}
            onClick={toggleNav}
            aria-label="Toggle navigation menu"
            aria-expanded={navActive}
          >
            <span className="nav__hamburger__line"></span>
            <span className="nav__hamburger__line"></span>
            <span className="nav__hamburger__line"></span>
          </button>
        </div>

        <div className={`navbar--items ${navActive ? "active" : ""}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  onClick={closeMenu}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  to={item.to}
                  className="navbar--content"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="navbar--mobile-cta">
              <Link
                onClick={closeMenu}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                to="Contact"
                className="btn btn-primary btn-3d"
              >
                {t.contact}
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar--actions">
          <div className="lang-pill" role="group" aria-label="Language switch">
            <button
              type="button"
              className={`lang-pill--btn ${lang === "id" ? "active" : ""}`}
              onClick={() => setLang("id")}
              aria-pressed={lang === "id"}
            >
              ID
            </button>
            <button
              type="button"
              className={`lang-pill--btn ${lang === "en" ? "active" : ""}`}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            className="navbar--icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle dark or light mode"
            title={theme === "light" ? "Dark Mode" : "Light Mode"}
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
          <Link
            onClick={closeMenu}
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            to="Contact"
            className="btn btn-primary btn-3d navbar--cta"
          >
            {t.contact}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
