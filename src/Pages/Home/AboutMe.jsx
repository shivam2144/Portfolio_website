export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
          I am a full-stack developer with strong problem-solving skills in Data Structures and Algorithms (DSA). I specialize in building scalable, efficient web applications using modern technologies like Node.js, Express, React, and MongoDB
          </p>
          <p className="hero--section-description">
          Passionate about optimizing performance and solving complex challenges, I continuously explore new technologies to enhance my development expertise.
          </p>
        </div>
      </div>
    </section>
  );
}
