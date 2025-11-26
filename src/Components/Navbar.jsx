import React from 'react'
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-[#801d2c] text-black font-bold shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to='/'>Home</Link></li>
      <li><Link to='/games'>Games</Link></li>
      <li><Link to='/installation'>News</Link></li>
      </ul>
    </div>
    <NavLink className='flex btn btn-ghost'>
      <img className='h-16 w-16' src="../gh.png" alt="" />
    </NavLink>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/games'>Games</Link></li>
      <li><Link to='/installation'>News</Link></li>
    </ul>
  </div>
  <div className="navbar-end ">
    
    <Link to='/login' className="btn border-0 shadow text-white bg-black"><FaGithub /> Login</Link>
    <Link to='https://github.com/KnoxNeon' className="btn border-0 shadow text-white bg-black"><FaGithub /> Register</Link>
  </div>
</div>
    </div>
  )
}

export default Navbar
