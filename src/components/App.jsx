
import React from "react";
import Header from "./Header";
import Title from "./Title";
import Gallery from './Gallery'
import heroimg from "../image/hero.jpg"


const App = () => {
  return (
    <div>

      <div
      className="bg-cover bg-center h-screen my-auto relative"
      style={{
        backgroundImage: `url(${heroimg})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50">
        <Header />
      </div>

      

    </div>
    </div>
  );
};

export default App;
