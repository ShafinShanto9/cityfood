import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { MdShoppingBag } from "react-icons/md";

const RowContainer = ({ flag, data, scrollValue }) => {

  const Spinner = require('react-spinkit');

  const rowContainer = useRef()
  useEffect(() => {
      rowContainer.current.scrollLeft += scrollValue
  },[scrollValue])

  return (
    <div ref={rowContainer} className={`my-12 w-full flex items-center gap-3 scroll-smooth  ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap justify-center'}`} >
      {!data && <>
        <Spinner name="folding-cube" color="orange" /> <p>Please Wait a moments...</p>
      </>}
      {data && data.map(item => (
         <div key={item.id} className='w-300 h-[245px] min-w-[300px] md:w-340 md:min-w-[340px]  p-1 md:p-2 my-12  bg-cardOverlay rounded-lg shadow-md backdrop-blur-lg hover:drop-shadow-lg'>
              <div className='w-full h-[150] flex items-center justify-between '>
                  <motion.img  whileHover={{scale: 1.2}} className='w-40 drop-shadow-xl object-cover' src={item?.imageURL} alt="" />
                  <motion.div whileTap={{scale: 0.75}} className='h-8 w-8 rounded-full bg-yellow-300 shadow-lg flex items-center justify-center cursor-pointer'>
                    <MdShoppingBag className='text-textColor'/>
                  </motion.div>
              </div>
              <div className='w-full flex flex-col items-end justify-end'>
            <p className='md:text-lg text-textColor font-semibold text-base'>{ item?.title}</p>
                  <p className='mt-1 text-sm text-gray-500'>{item?.calorise} Calorise</p>
                  <div className='flex items-center gap-8'>
              <p className='text-lg text-headingColor font-semibold'><span className='text-sm text-yellow-800'>$</span>{ item?.price}</p>
                  </div>
              </div>
          </div>
      ))}     
    </div>
  )
}

export default RowContainer