import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useApp } from "../../context/AppContext";
import { translations } from "../../data/translations";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, toggleTheme, lang, setLang } = useApp();
  const t = translations[lang].nav;

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

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? "is-scrolled" : ""}`}>
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
      <nav
        className={`navbar ${navActive ? "active" : ""} ${
          scrolled ? "navbar--scrolled" : ""
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
            {theme === "light" ? "🌙" : "☀️"}
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
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                to="heroSection"
                className="navbar--content"
              >
                {t.home}
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                to="mySkills"
                className="navbar--content"
              >
                {t.skills}
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                to="AboutMe"
                className="navbar--content"
              >
                {t.about}
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                to="Experience"
                className="navbar--content"
              >
                {t.experience}
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                to="MyPortfolio"
                className="navbar--content"
              >
                {t.projects}
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                to="achievement"
                className="navbar--content"
              >
                {t.awards}
              </Link>
            </li>
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
            {theme === "light" ? "🌙" : "☀️"}
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
