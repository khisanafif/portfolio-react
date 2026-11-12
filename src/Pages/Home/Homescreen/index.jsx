import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Experience from "../Experience";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import AchievementList from "../Testimonials";

export default function Home() {
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
    </main>
  );
}
