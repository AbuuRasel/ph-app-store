import React from 'react';
import HeroImg from '../../assets/hero.png'
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { FaAppStoreIos } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className='min-h-[70vh] text-center space-y-8 pt-10'>
      <h2 className='text-6xl font-bold'>We Build <br /><span className='text-purple-500'>Productive</span> Apps</h2>
      <p className='w-[50%] mx-auto font-semibold text-gray-500 space-y-3'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <div className='flex gap-4 items-center justify-center'>
        <button className='btn'><IoLogoGooglePlaystore /> Google Play</button>
        <button className='btn'><FaAppStoreIos /> App Store</button>
      </div>
      <img src={HeroImg} alt="" className='mx-auto' />
    </div>
  );
};

export default Banner;