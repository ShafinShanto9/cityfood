import { motion } from 'framer-motion';
import React from 'react';
import Delivary from '../img/delivery.png';
import { heroData } from '../utils/data';

const Home = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-3  w-full' id='home'>
      <div className='py-2 flex-1 flex flex-col items-center md:items-start justify-start gap-6 '>
        <motion.div
          initial={{opacity:0, x:200}}
          animate={{opacity:1, x:0}}
          exit={{ opacity: 0, x: 200 }}
          className='w-full flex items-center justify-center gap-2  mt-5 drop-shadow-xl'>
          <div>
           <p className='text-base text-yellow-700 font-semibold'>Super Cool Delivary</p></div> 
          <div className='w-12 h-15 rounded-full overflow-hidden'>
              <img src={Delivary} className="w-full h-full object-contain " alt="Delivary" />
          </div>      
        </motion.div>
        <p className='text-[2.5rem] font-bold tracking-wide text-headingColor'>We Provide You <span className='text-yellow-600 text-[3rem]'>Super Cool Delivary</span> In Your City</p>

        <blockquote>
          <q className='text-base text-textColor'>Food for the body is not enough. There must be food for the soul</q>
          <p>— Dorothy Day</p>
        </blockquote>

        <button type='button' className='bg-buttonColor w-full md:w-auto p-4 rounded-lg hover:shadow-xl transition-all ease-in-out duration-100 
        ' >Order Now</button>
          </div>
          
          
        <div className='w-full h-full py-4 flex items-center justify-center gap-8 flex-wrap mt-12 lg:px-32 px-1'>
        {heroData?.map(data => (
          <div key={data.id} className='lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl shadow-xl flex flex-col items-center justify-center cursor-pointer drop-shadow-lg'> 
            <img src={data.imageSrc} className="w-20 lg:w-40 lg:-mt-20 -mt-10 " alt="Icecreame" />
              <p className='text-base font-semibold'>{ data.name}</p>
              <p className='text-[12px] lg:text-sm text-gray-600 my-1 lg:my-2 text-center'>{ data.desc}</p>
            <p className='text-sm text-semibold'> <span className='text-yellow-600'>$</span> {data.price} </p>
            </div>
          ))} 
        </div>
    </section>
    
    
  )
}

export default Home