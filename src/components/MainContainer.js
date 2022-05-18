import { motion } from 'framer-motion';
import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Home from './Home';
import RowContainer from './RowContainer';

const MainContainer = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center' > 
      <Home />
      <section className='w-full mt-10'>
        <div className='w-full flex items-center justify-between'> 
          <p className='text-xl font-semibold capitalize text-headingColor relative
            before:absolute before:rounded-lg before:content before:w-32 before:h-1
            before:-bottom-2 before:left-0 before:bg-yellow-500 transition-all ease-in-out
            duration-100
          '>
            Our Fish Items For Lunch and Dinner 🐟
          </p>
          <div className='hidden md:flex items-center gap-3'>
              <motion.div whileTap={{scale : 0.75}} className='flex items-center justify-center h-8 w-8 rounded-lg bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg'> <MdChevronLeft className='text-lg text-white' /> </motion.div>
              <motion.div whileTap={{scale : 0.75}} className='flex items-center justify-center h-8 w-8 rounded-lg bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg'> <MdChevronRight className='text-lg text-white ' /> </motion.div>
          </div>
        </div>
        <RowContainer flag={true} />
      </section>
    </div>
  )
}

export default MainContainer