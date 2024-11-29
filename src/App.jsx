import Aos from "aos";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect , useState } from "react";
import { Banner } from "./Components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import TopProducts from "./Components/TopProducts/TopProducts";
import Subscribe from "./Components/Subscribe/Subscribe";
import Testimonials from "./Components/Testimonials/Testimonials";
import Popup from "./Components/Popup/Popup";
import Footer from "./Components/Footer/Footer";

function App() {

  const[orderPopup , setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

  useEffect(() => {
    AOS.init({
      offset : 100,
      duration : 800,
      easing : "ease-in-sine",
      delay : 100
    });
    Aos.refresh();
  }, [])

  return (
    <>
      <div className="bg-white dark:bg-grey 900 dark:text-white duration-200"></div>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </>
  )
}

export default App
