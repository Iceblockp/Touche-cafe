
import React from 'react'
import Menu from './Menu'
import OnlineReservation from "./OnlineReservation";
import Dishes from "./Dishes";
import SectionThree from "./SectionThree";
import Gallery from "./Gallery";
import Newsletter from "./Newsletter";
import EventShow from "./EventShow";
import AboutUs from "./AboutUs";
import SectionFour from "./SectionFour";
import Menu from "./Menu";
import SectionTwo from "./sectionTwo";
import Location from "./Location";
import Footer from "./Footer";
import NavBar from "./NavBar";
import TopHeader from "./TopHeader";


const App = () => {
  return (
    <div>

      
      <Menu/>


      <TopHeader/>
      <NavBar />
      <SectionTwo />

      <SectionThree />
      <SectionFour />
      <Menu />
      <Dishes />
      <OnlineReservation />
      <AboutUs />
      <EventShow />
      <Newsletter />
      <Gallery />
      <Location />
      <Footer />

    </div>
  );
};

export default App;
