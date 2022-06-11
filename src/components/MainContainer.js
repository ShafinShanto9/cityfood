import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useStateValue } from '../context/StateProvider';
import CartContainer from './CartContainer';
import Home from './Home';
import MenuContainer from './MenuContainer';
import RowContainer from './RowContainer';

const MainContainer = () => {
  const [{ foodItems }, dispatch] = useStateValue()
  const [scrollValue, setScrollValue] = useState(0)
  
  useEffect(()=>{},[scrollValue])
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center' > 
      <Home />
      {/* Fish Dish Menu Section */}
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
            <motion.div whileTap={{ scale: 0.75 }} className='flex items-center justify-center h-8 w-8 rounded-lg bg-yellow-500 hover:bg-yellow-400 cursor-pointer  hover:shadow-lg' onClick={() => { setScrollValue(-350) } }> <MdChevronLeft className='text-lg text-white' /> </motion.div>
            
            <motion.div whileTap={{ scale: 0.75 }} className='flex items-center justify-center h-8 w-8 rounded-lg bg-yellow-500 hover:bg-yellow-400 cursor-pointer  hover:shadow-lg' onClick={() => { setScrollValue(350) } }
            >
              <MdChevronRight className='text-lg text-white ' />
            </motion.div>
          </div>
        </div>
        <RowContainer scrollValue={scrollValue} flag={true} data= {foodItems?.filter(d=> d.category === 'fish')}  />
      </section>
    {/* Our Menu Container Section */}
      <section className='w-full my-10' id='menu'>
        <MenuContainer/>
      </section>

      <CartContainer/>

    </div>
  )
}

export default MainContainer