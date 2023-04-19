import "./App.css";
import Navbar from "./components/Navbar";
import HomeSlider from "./components/HomeSlider";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import OurClients from "./components/OurClients";
import FooterSection from "./components/FooterSection";
import Products from "./components/Products";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <HomeSlider/>
        <AboutUs/>
        <Products/>
         <ContactUs/>
         <OurClients/>
         <FooterSection/>
        
      </div>  
    </>
  );
}

export default App;
