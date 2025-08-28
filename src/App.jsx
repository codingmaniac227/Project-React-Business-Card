import { useState } from 'react'
import './App.css'
import Info from './components/Info.jsx'
import About from './components/About.jsx'
import Interests from './components/Interests.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <div className='card-container'>  
        <Info />
        <main className='main-content'>
          <About />
          <Interests />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
