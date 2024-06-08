import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import AchievementList from "../Testimonials";

export default function Home() {
  return (
    <>
      <div style={{ marginBottom: '100px', padding: '20px', backgroundColor: '#f4f4f4' }}>
        <HeroSection />
      </div>
      <div style={{ marginBottom: '280px', padding: '20px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px' }}>
        <MySkills />
      </div>
      <div style={{ marginBottom: '100px', padding: '20px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px' }}>
        <AboutMe />
      </div>
      <div style={{ marginBottom: '100px', padding: '20px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px' }}>
        <MyPortfolio />
      </div>
      <div style={{ marginBottom: '100px', padding: '20px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px' }}>
        <AchievementList />
      </div>
      <div style={{ marginBottom: '100px', padding: '20px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px' }}>
        <ContactMe />
      </div>
      <div style={{ padding: '20px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px' }}>
        <Footer />
      </div>
    </>
  );
}
