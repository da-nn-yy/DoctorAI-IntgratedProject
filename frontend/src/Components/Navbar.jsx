import React, {use, useState} from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }
  const handleLogout = () => {
    setIsLoggedIn(false)
  }
  return (

    <div className="mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4 flex justify-between items-center p-5 bg-cyan-50 shadow-lg mt-10 rounded-4xl" >
        <h1 className='text-3xl font-black hover:bg-cyan-500'>Doctor AI</h1>
        <div>
            <div className="flex justify-between gap-4" >
                <Link to="/"  className='nav-link'> Home </Link>
                <Link to='/about' className='nav-link'> About </Link>
            </div>
        </div>
      {isLoggedIn ? (
          <button className='btn' onClick={handleLogout}>Logout</button>
        ) : (
          <button className='btn' onClick={handleLogin}>Login</button>
      )}
    </div>
  )
}

export default Navbar;
