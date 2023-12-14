
import React from 'react'
import OnlineReservation from './OnlineReservation'
import Dishes from './Dishes'
import Header from "./Header";
import SectionThree from './SectionThree'
import Gallery from './Gallery'
import Newsletter from './Newsletter'
import EventShow from './EventShow'
import AboutUs from './AboutUs'
import SectionFour from './SectionFour'
import Menu from './Menu';
import heroImg from "../image/hero.jpg"
import SectionTwo from "./sectionTwo";
import Location from './Location'
import Footer from './Footer'

const App = () => {
  return (
    <div>



       


     


      


     


      
      




      <div
      className="bg-cover bg-center h-screen my-auto relative"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50">
        <Header />
      </div>

      

     


    </div>




    <SectionTwo/>
    
      <SectionThree />
      <SectionFour/>
      <Menu/>
      <Dishes/>
      <OnlineReservation/>
      <AboutUs/>
      <EventShow/>
      < Newsletter />
      <Gallery/>
      <Location/>
      <Footer/>

    






    </div>
  );
};

export default App;
