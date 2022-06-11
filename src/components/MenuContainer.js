import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { IoFastFood } from 'react-icons/io5'
import { useStateValue } from '../context/StateProvider'
import { Categories } from '../utils/data'
import RowContainer from './RowContainer'

const MenuContainer = () => {

  const [filter, setFilter] = useState('fruits')
  const [{ foodItems }, dispatch] = useStateValue()
  
  return (
    <section className='w-full flex flex-col items-center justify-around'>
         <p className='text-xl font-semibold capitalize text-headingColor relative
            before:absolute before:rounded-lg before:content before:w-16 before:h-1
            before:-bottom-2 before:left-0 before:bg-yellow-500 transition-all ease-in-out
            duration-100 mr-auto
          '>
            Our Hot And Delicious Dishes 😋
          </p>

          <div className='w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll 
          scrollbar-none'>
          {Categories && Categories.map((category) => (
            <motion.div
              whileTap={{scale: 0.7}}
              onClick={() => setFilter(category.urlParamName)} key={category.id}
              className={`group ${filter === category.urlParamName ? 'bg-yellow-400' : 'bg-yellow-200'}
               bg-yellow-200 w-24 min-w-[94px] h-28 cursor-pointer  drop-shadow-xl
                rounded-lg flex flex-col gap-3 items-center justify-center
                 hover:bg-yellow-400 `}> 
              
              <div
                className={`w-10 h-10 ${filter === category.urlParamName ? 'bg-yellow-200' : 'bg-yellow-400'} group-hover:bg-yellow-200
                 rounded-full flex items-center justify-center`}>
                
                <IoFastFood className={`${filter === category.urlParamName ? 'text-yellow-600' : 'text-textColor'} group-hover:text-yellow-600 text-lg`} />
                
            </div>
            <p className='text-sm'>{ category.name}</p>
            </motion.div>
          ))}
      </div>
      
      <div className='w-full '>
        <RowContainer flag={false} data={ foodItems?.filter((n) => n.category === filter ) }/>
      </div>
    </section>
  )
}

export default MenuContainer