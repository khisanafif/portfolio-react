export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Khisan Afif Ainur Rohim</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Learning to be</span>{" "}
            <br />
            Full Stack Developer
          </h1>
          <p className="hero--section-description">
           Undergraduate Student Of Information Technology, Universitas Jember
           
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
