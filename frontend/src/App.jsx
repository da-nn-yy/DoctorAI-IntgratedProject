import React from 'react'
import Home from './Components/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';


function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
