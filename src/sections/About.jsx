import aboutImage from "../assets/about-image.svg";
import "../styles/About.css";

function About() {
  return (
    <>
      <section className="about-section">
        <div className="about-image-container">
          <img className="about-image" src={aboutImage} alt="" />
        </div>
        <div className="about-text">
          <p className="about-subheader">OUR STORY</p>
          <p className="about-header">Rooted in slow, intentional growth</p>
          <p className="about-description">
            Terra began in 2018 in a small backyard greenhouse with a simple
            goal: to replace mass-produced plastic nursery stock with carefully
            raised, structurally sound plants.
          </p>
          <button className="about-button">Read Our Manifesto</button>
        </div>
      </section>
    </>
  );
}

export default About;
