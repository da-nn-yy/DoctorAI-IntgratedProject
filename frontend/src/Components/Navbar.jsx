import React, {use, useState} from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState()

  const handleLogin = () => {
    setIsLoggedIn(true)
  }
  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
<section className='mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4 '>
  <div  className='flex justify-between items-center p-5 bg-cyan-50 shadow-lg mt-10 rounded-full px-16'>
    <h1 className='text-2xl font-black'>Doctor AI.</h1>
    <button
      className="md:hidden text-black focus:outline-none"
      onClick={handleToggle}
      aria-label="Toggle menu"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
      </svg>
    </button>
    <div className={`md:flex md:items-center md:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} `} >
      <Link to="/"  className='nav-link'> Home </Link>
      <Link to='/about' className='nav-link'> About </Link>
    <Link to="/login"> {isLoggedIn ? (
      <button className='btn' onClick={handleLogout}>Logout</button>
    ) : (
      <button className='btn' onClick={handleLogin}>Login</button>
    )}
    </Link>
    </div>

  </div>


</section>


  )
}

export default Navbar;
