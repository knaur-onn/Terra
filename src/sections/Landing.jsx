import "../styles/Landing.css";
import landingImage from "../assets/landing-image.svg";

function Landing() {
  return (
    <>
      <section className="landing-page">
        <div className="landing-text text">
          <h4 className="landing-small-header text">BOTANICAL MODERNISM</h4>
          <h1 className="landing-header text">
            Bringing nature indoor, shaped by intent
          </h1>
          <p className="landing-subheader text">
            Terra curates robust, uncommon houseplants and designer ceramic
            ware. Hand-selected, potted with care, and shipped to seamlessly
            transform your living space.
          </p>

          {/* Convert buttons into components */}
          <div className="landing-buttons">
            <button className="cta-button collection">Shop Collection</button>
            <button className="cta-button story">Our Story</button>
          </div>
        </div>
        <div className="landing-image-section">
          <img className="landing-image" src={landingImage} alt="" />
        </div>
      </section>
    </>
  );
}

export default Landing;
