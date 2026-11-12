import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      setScrolled(window.scrollY > 24);
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
                Home
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
                Skills
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
                About Me
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
                Portfolio
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
                Achievement
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
                Contact Me
              </Link>
            </li>
          </ul>
        </div>

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
          Contact Me
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
