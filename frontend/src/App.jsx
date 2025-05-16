import React from 'react'
import './App.css'
import Home from './Components/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
