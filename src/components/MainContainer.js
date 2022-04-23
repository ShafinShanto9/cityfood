import React from 'react'
import Delivary from '../img/delivery.png'

const MainContainer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
      <div className='py-2 flex-1 flex flex-col items-start md:items-center justify-center gap-6 '>
          <div className='flex items-center justify-center gap-2 bg-yellow-200 mt-5 rounded-full py-1 px-3 drop-shadow-xl'>
            <p className='text-base text-yellow-700 font-semibold'>Fast Delivary</p> 
          <div className='w-8 h-8 rounded-full overflow-hidden'>
              <img src={Delivary} className="w-full h-full object-contain" alt="Delivary" />
          </div> 
        </div>
        <p className='text-[2.5rem] font-bold tracking-wide text-headingColor'>We Provide You <span className='text-yellow-600 text-[3rem]'>Super Cool Delivary</span> In Your City</p>

        <blockquote>
          <q className='text-base text-textColor'>Food for the body is not enough. There must be food for the soul</q>
          <p>— Dorothy Day</p>
        </blockquote>

        <button className='bg-buttonColor w-full p-4  ' >Order Now</button>
        


      </div>
      <div className='py-2 flex-1'></div>
    </div>
  )
}

export default MainContainer