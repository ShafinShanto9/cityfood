import React from 'react'
import Delivary from '../img/delivery.png'
import { motion } from 'framer-motion';
import Home from './Home';

const MainContainer = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center' > 
      <Home/>
    </div>
  )
}

export default MainContainer