import "../styles/Header.css";
import logo from "../assets/plant-logo.svg";
import searchIcon from "../assets/magnifying-lens.svg";
import bagIcon from "../assets/bag-icon.svg";
import counterIcon from "../assets/counter-icon.svg";

function Hero() {
  return (
    <>
      <header>
        <div className="header">
          <div className="header-logo">
            <img src={logo} alt="" />
          </div>
          <nav className="center-navigation">
            <a href="">Shop Plants</a>
            <a href="">Care Simple</a>
            <a href="">Our Story</a>
            <a href="">Visit</a>
          </nav>
          <nav className="header-navigation">
            {/* Update element to be clickable */}
            <img className="nav-icons" src={searchIcon} alt="" />
            <img className="nav-icons" src={bagIcon} alt="" />
            <img className="nav-icons" src={counterIcon} alt="" />
          </nav>
        </div>
      </header>
    </>
  );
}

export default Hero;
