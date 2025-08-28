import { useState } from 'react'
import './App.css'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

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
