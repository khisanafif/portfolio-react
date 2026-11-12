import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Experience from "../Experience";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import AchievementList from "../Testimonials";

export default function Home() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 420);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <Experience />
      <MyPortfolio />
      <AchievementList />
      <ContactMe />
      <Footer />
      {showTop && (
        <button
          type="button"
          className="back-to-top btn-3d"
          onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
          aria-label="Back to top"
          title="Back to top"
        >
          ↑
        </button>
      )}
    </main>
  );
}
