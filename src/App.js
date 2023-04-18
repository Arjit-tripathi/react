import "./App.css";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import HomeSlider from "./components/HomeSlider";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <HomeSlider/>
        <AboutUs/>
         <ContactUs/> 
      </div>
      

       <div className='container gap-2 d-flex justify-content-center"'>
        <MainSection
          title="Technology"
          src="https://th.bing.com/th/id/OIP.xZy01t2g2X1yYA_GaCG7zQHaEL?pid=ImgDet&rs=1"
          text="Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported."
        />

        <MainSection
          title="Node Js"
          src="https://th.bing.com/th/id/OIP.xZy01t2g2X1yYA_GaCG7zQHaEL?pid=ImgDet&rs=1"
          text="Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported."
        />

        <MainSection
          title="Python"
          src="https://th.bing.com/th/id/OIP.xZy01t2g2X1yYA_GaCG7zQHaEL?pid=ImgDet&rs=1"
          text="Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported."
        />
      </div> 
    </>
  );
}

export default App;
