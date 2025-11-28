import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { Key, LogIn, LogOut } from 'lucide-react';
import { signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { scale } from 'motion';

const Navbar = () => {
  const {user} = useContext(AuthContext)

  const handleSignOut = () =>{
    signOut(auth)
  } 
  return (
    <div>
      <div className="navbar z-10 bg-[#0f172a] text-orange-500  border-t border-white/10 w-full text-grey font-bold shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/games">Games</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
            </ul>
          </div>
          <NavLink className="flex lg:pl-4">
            <img className="h-16 w-24 hover:scale-120 "  src="../gh.png" alt="" />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/games">Games</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            
          </ul>
        </div>

        <div className="navbar-end ">
          {user && (
            <div className='flex gap-2'>
              <Link to="/profile"><img className='w-10 h-10 rounded-4xl border-2 border-orange-500 hover:scale-110' src={user.photoURL} alt="" /></Link>
              <button onClick={handleSignOut} className="btn border-0 shadow rounded-3xl gap-1 hover:scale-110 text-white bg-orange-500"> Logout</button>
            </div>
          )}

          {!user && (
            <div className='space-x-2'>
              <Link
                to="/login"
                className="btn border-0 rounded-3xl shadow hover:scale-110 text-white bg-orange-500"
              >
                 Login
              </Link>
              <Link
                to="/register"
                className="btn border-0 rounded-3xl shadow  hover:scale-110 text-white bg-orange-500"
              >
                 Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar
