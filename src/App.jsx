import Header from "./components/Header";
import Landing from "./sections/Landing";
import Promise from "./sections/Promise";
import Collections from "./sections/Collections";
import CareTips from "./sections/CareTips";
import About from "./sections/About";
import Reviews from "./sections/Reviews";
import Address from "./sections/Address";
// import Newsletter from "./sections/Newsletter";
import Footer from "./sections/Footer";
import "./styles/App.css";

function App() {
  return (
    <>
      <Header />
      <Landing />
      <Promise />
      <Collections />
      <CareTips />
      <About />
      <Reviews />
      <Address />
      {/* <Newsletter /> */}
      <Footer />
    </>
  );
}

export default App;
