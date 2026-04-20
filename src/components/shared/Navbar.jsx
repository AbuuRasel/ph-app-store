import React from 'react';
import { Link,NavLink } from 'react-router';
import logoImg from '../../assets/logo.png'
import { FaGithub } from 'react-icons/fa';
import MyNavLink from './MyNavLink';
const Navbar = () => {
  return (
    <nav className='shadow'>
      <div className='container mx-auto py-3 flex justify-between items-center'>
        <Link to='/' className='flex gap-2 items-center font-bold cursor-pointer'>
        <img src={logoImg} alt="" className='w-[50px]' />
        <h2 className=" bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">HERO.IO</h2>
        </Link>
        <ul className='flex gap-5 font-semibold'>
          <li><MyNavLink to={'/'}>Home</MyNavLink></li>
          <li><MyNavLink to={'/apps'}>Apps</MyNavLink></li>
          <li><MyNavLink to={'/installedApps'}>Installation</MyNavLink></li>
        </ul>
        <button className='font-bold flex gap-2 items-center btn btn-primary'>
          <FaGithub /> Contribute
        </button>
      </div>
    </nav>
  );
};

export default Navbar;