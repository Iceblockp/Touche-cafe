import React from 'react'
import Header from './Header'

const App = () => {
  return (
    <div className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url('image/coffeeBottle.jpg')`,
      }}>
      <Header/>
    </div>
  )
}

export default App