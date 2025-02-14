export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Shivam </p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          I am a skilled full-stack developer with expertise in both front-end and back-end technologies.
            <br /> 
          </p>
        </div>
        
        <button className="btn btn-primary">
      <a href="./resume/shivam_resume.pdf" download="shivam_resume.pdf" style={{ color: 'inherit', textDecoration: 'none' }}>
        Download CV
      </a>
    </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
