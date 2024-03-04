import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/');
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[100%] mx-auto px-4 text-black'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>MD.</h1>
      <ul className='hidden md:flex'>
        <Link to='/dashboard' className='p-4 font-bold mx-10 border-b-2'>Dashboard</Link>
        <Link to='/profile' className='p-4 font-bold mx-10 border-b-2'>Profile</Link>
        <li className='p-4'><button onClick={() => handleLogout()}><FiLogOut size={30} color='#00df9a'/></button></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>MD.</h1>
          <li className='p-4 border-b border-gray-400'>Home</li>
          <li className='p-4 border-b border-gray-400'>Company</li>
          <li className='p-4 border-b border-gray-400'>Resources</li>
          <li className='p-4 border-b border-gray-400'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
