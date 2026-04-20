import React from 'react';
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import footerLogo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-[#001930] text-white p-4">
      <div className='container mx-auto'>
        <div className='flex justify-between w-full items-center'>
          <div className='flex items-center gap-2'>
            <img src={footerLogo} alt="" className='w-[40px]' />
            <h3 className='font-semibold'>HERO.IO</h3>
          </div>
          <div className='space-y-1'>
            <h4 className='font-semibold'>Social Links</h4>
            <div className='flex gap-3'>
              <FaSquareXTwitter />
              <FaLinkedin />
              <FaFacebookSquare />
            </div>
          </div>
        </div>
      <div className="divider"></div>
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by HERO.IO Ltd</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;