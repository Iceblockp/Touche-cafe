
import React from "react";
import Header from "./Header";
import SectionThree from './SectionThree'
import Gallery from './Gallery'

import heroImg from "../image/hero.jpg"
import SectionTwo from "./sectionTwo";

import SectionFour from './SectionFour'
 



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
      <Gallery/>
    


    </div>
  );
};

export default App;
