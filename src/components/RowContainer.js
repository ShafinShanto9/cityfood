import { motion } from 'framer-motion';
import React from 'react';
import { MdShoppingBag } from "react-icons/md";
const RowContainer = ({flag}) => {
  return (
      <div className={`my-12 w-full  ${flag ? 'overflow-x-scroll' : 'overflow-x-hidden'}`} >
          <div className='w-300 md:w-340 p-1 md:p-2 my-12 h-auto bg-cardOverlay rounded-lg shadow-md backdrop-blur-lg hover:drop-shadow-lg'>
              <div className='w-full flex items-center justify-between '>
                  <motion.img whileHover={{scale: 1.2}} className='w-40 -mt-8 drop-shadow-xl' src="https://firebasestorage.googleapis.com/v0/b/cityfood-b8e13.appspot.com/o/Image%2F1652770916607-r5.png?alt=media&token=b087e31a-1760-4690-991f-6d93412c9a8a" alt="" />
                  <motion.div whileTap={{scale: 0.75}} className='h-8 w-8 rounded-full bg-yellow-300 shadow-lg flex items-center justify-center cursor-pointer'>
                    <MdShoppingBag className='text-textColor'/>
                  </motion.div>
              </div>
              <div className='w-full flex flex-col items-end justify-end'>
                  <p className='md:text-lg text-textColor font-semibold text-base'>Polao With Chicken</p>
                  <p className='mt-1 text-sm text-gray-500'>45 Calorise</p>
                  <div className='flex items-center gap-8'>
                      <p className='text-lg text-headingColor font-semibold'><span className='text-sm text-yellow-800'>$</span>21.0</p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default RowContainer