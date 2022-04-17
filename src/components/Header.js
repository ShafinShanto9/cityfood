import React from 'react'
import Logo from '../img/logo.png'
import { MdShoppingBag } from "react-icons/md";
const Header = () => {
  return (
      <header className='fixed z-50 w-screen  p-6 px-16' >
          {/* Desktop And Tablet View */}
          <div className='hidden md:flex w-full h-full'>
              <div className='flex items-center gap-1'>
                <img src={Logo} className='w-12 object-cover' alt="logo" />
                <p className='text-headingColor text-xl font-bold' >City Food</p>
          </div>
          <ul className='flex items-center gap-8 ml-auto'>
            <li className='text-base text-textColor duration-100 transition-all ease-in-out hover:text-headingColor cursor-pointer'>Home</li>
            <li className='text-base text-textColor duration-100 transition-all ease-in-out hover:text-headingColor cursor-pointer'>Menu</li>
            <li className='text-base text-textColor duration-100 transition-all ease-in-out hover:text-headingColor cursor-pointer'>About Us</li>
            <li className='text-base text-textColor duration-100 transition-all ease-in-out hover:text-headingColor cursor-pointer'>Service</li>
        </ul>
        
        <div className='relative flex items-center justify-center '>
          <MdShoppingBag className='text-textColor text-2xl ml-8 cursor-pointer' />
          <div className='w-5 h-5 rounded-full bg-cartNumBg'>
            <p className='text-sm text-white font-semibold'>2</p>
          </div>
        </div>
          </div>
          {/* Mobile View */}
          <div className='flex md:hidden w-full h-full '>

          </div>
    </header>
  )
}

export default Header