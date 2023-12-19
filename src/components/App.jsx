import React from "react";

import OnlineReservation from "./OnlineReservation";
import Dishes from "./Dishes";
import SectionThree from "./SectionThree";
import Gallery from "./Gallery";
import Newsletter from "./Newsletter";
import EventShow from "./EventShow";
import AboutUs from "./AboutUs";
import SectionFour from "./SectionFour";
import Location from "./Location";
import NavBar from "./NavBar";
import TopHeader from "./TopHeader";
import Menu from "./Menu";
import Footer from "./Footer";
import SectionTwo from "./SectionTwo";

const App = () => {
  return (
    <div className=" overflow-hidden">
      <TopHeader />
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
