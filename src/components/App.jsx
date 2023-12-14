
import React from "react";
import Header from "./Header";
import Title from "./Title";

import React from 'react'
import Gallery from './Gallery'


const App = () => {
  return (
    <div>

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

    </div>
    </div>
  );
};

export default App;
