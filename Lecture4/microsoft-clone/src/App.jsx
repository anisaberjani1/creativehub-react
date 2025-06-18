import "./App.css";
import Banner from "./components/Banner/Banner";
import Business from "./components/Business/Business";
import Explore from "./components/Explore/Explore";
import Features from "./components/Features/Features";
import FindMore from "./components/FindMore/FindMore";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/hero";
import Infos from "./components/Infos/Infos";

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <Features/>
      <Infos/>
      <Banner/>
      <Business/>
      <Explore/>
      <FindMore/>
      <Footer/>
    </>
  );
}

export default App;
