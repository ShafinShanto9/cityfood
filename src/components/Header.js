import React from 'react'

const Header = () => {
  return (
      <div className='fixed z-50 w-screen bg-gray-300 p-6 px-16' >
          {/* Desktop And Tablet View */}
          <div className='hidden md:flex w-full h-full bg-red-600 p-4'>

          </div>
          {/* Mobile View */}
          <div className='flex md:hidden w-full h-full bg-green-600 p-4'>

          </div>
    </div>
  )
}

export default Header