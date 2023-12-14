
import React from 'react'

import OnlineReservation from './OnlineReservation'

import Dishes from './Dishes'
import Header from "./Header";
import Title from "./Title";
import SectionTwo from './sectionTwo'
import SectionThree from './SectionThree'
import Gallery from './Gallery'
import EventShow from './EventShow'

import AboutUs from './AboutUs'

import SectionFour from './SectionFour'






const App = () => {
  return (
    <div>

      <EventShow/>


      <AboutUs/>


      <OnlineReservation/>


      <Dishes />
      


      <SectionTwo />
      <SectionThree />


      <div
      className="bg-cover bg-center h-screen my-auto relative"
      style={{
        backgroundImage: `url('image/hero.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50">
        <Header />
      </div>

      < Gallery />

      <SectionFour/>


    </div>






    </div>
  );
};

export default App;
