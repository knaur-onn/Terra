import Logo from "../assets/plant-logo.svg";
import "../styles/Footer.css";

function Footer() {
  return (
    <>
      <section className="footer-section">
        <div className="footer-text">
          <img className="footer-logo" src={Logo} alt="" />
          <p className="footer-description sub-text">
            Providingf modern architectural plants, bespoke pottery, and
            personalized care simple methodology since 2018.
          </p>
        </div>
        <div className="footer-links">
          <div className="anchor-links sub-text">
            <h5 className="">SHOP</h5>
            <a href="">Houseplants</a>
            <a href="">Ceramics</a>
          </div>
          <div className="anchor-links sub-text">
            <h5 className="anchor-title">COMPANY</h5>
            <a href="">Our Roots</a>
            <a href="">Journal</a>
          </div>
          <div className="anchor-links sub-text">
            <h5 className="anchor-title">SOCIALS</h5>
            <a href="">Instagram</a>
            <a href="">Pinterest</a>
          </div>
        </div>
      </section>
      <section className="footer-end">
        <div className="text-logo-container main-text">
          <p>TERRA</p>
        </div>
        <hr />
        <div className="footer-tag">
          <p className="sub-text">© 2026 Terra Boutique Nursery.</p>
          <div className="footer-subtag sub-text">
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
