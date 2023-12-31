import React from 'react'
import { logoLight, paymentLogo } from '../assets'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaHome } from 'react-icons/fa';
import { ImGithub } from 'react-icons/im';

import { MdLocationOn } from 'react-icons/md';
import { BsPersonFill, BsPaypal } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">

        <div className="flex flex-col gap-7">
            <img src={logoLight} alt="logoLight" className='w-32'/>
            <p className="text-white text-sm tracking-wide">ReactBD.com</p>
            <img src={paymentLogo} alt="paymentLog" className='w-56'/>
            
            <div className='flex gap-5 text-lg text-gray-400'>
                <ImGithub className='hover:text-white cursor-pointer duration-300' />
                <FaYoutube className='hover:text-white cursor-pointer duration-300' />
                <FaFacebookF className='hover:text-white cursor-pointer duration-300' />
                <FaTwitter className='hover:text-white cursor-pointer duration-300' />
                <FaInstagram className='hover:text-white cursor-pointer duration-300' />
            </div>
        </div>

        <div>
            <h2 className='text-2xl font-semibold text-white mb-4'>locate us</h2>
            
            <div className="text-base flex flex-col gap-2">
                <p>MDB, Ruwi, Muscat-Oman</p>
                <p>Mobile: 00968 97859629</p>
                <p>Phone: 00968 24769821</p>
                <p>e-email bazar@gmail.com</p>
            </div>
        </div>

        <div className="">
            <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>

            <div className="flex flex-col gap-2 text-base">
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                    <span className='text-lg'><BsPersonFill /></span> 
                    my account 
                </p>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                    <span className='text-lg'><BsPaypal /></span> 
                    checkout
                </p>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                    <span className='text-lg'><FaHome /></span> 
                    order tracking
                </p>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                    <span className='text-lg'><MdLocationOn /></span> 
                    help & support
                </p>
            </div>

        </div>

        <div className='flex flex-col justify-center'>
            <input type="email" 
                className='bg-transparent border px-4 py-2 text-sm' placeholder='e-mail' />
            <button className='text-sm border text-white border-t-0 hover:bg-gray-900 
                active:bg-white active:text-black'>Subscribe</button>
        </div>



      </div>
    </div>
  )
}

export default Footer
