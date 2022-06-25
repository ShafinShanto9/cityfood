import { motion } from 'framer-motion'
import { BiMinus, BiPlus } from "react-icons/bi"
import { MdOutlineKeyboardBackspace } from "react-icons/md"
import { RiRefreshFill } from "react-icons/ri"
import { actionType } from '../context/reducer'
import { useStateValue } from '../context/StateProvider'


const CartContainer = () => {

  const [{ cartShow }, dispatch] = useStateValue()
  
  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow : !cartShow
    })
  }
  return (
    <div className="flex flex-col fixed top-0 right-0 z-[101] h-screen w-full md:w-375 bg-white drop-shadow-md ">

      <div className="flex items-center justify-between w-full p-4 cursor-pointer">
        <motion.div whileTap={{scale: 0.75}} onClick={showCart}>
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
        </motion.div>
        <p className='text-textColor text-lg font-semibold'>Cart Menu</p>
        <motion.p whileTap={{scale: 0.75}} className='flex items-center gap-2 p-1 px-2 my-2 bg-red-400 rounded-md hover:shadow-md cursor-pointer text-white text-base'>Clear Cart Items <RiRefreshFill/> </motion.p>
      </div>
    {/*  Cart Items Section */}
      <div className='w-full h-full bg-gray-100 rounded-t-[2rem] flex flex-col'>
        <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none '> 
          
          {/*  Show Single Cart Items */}
          <div className='w-full p-1 px-2 rounded-lg bg-cartBg flex items-center gap-2'>
            <img src="https://firebasestorage.googleapis.com/v0/b/cityfood-b8e13.appspot.com/o/Image%2F1652770916607-r5.png?alt=media&token=b087e31a-1760-4690-991f-6d93412c9a8a"
              className='h-20 w-20 max-w-[60px] rounded-full object-contain' alt="" srcset="" />
            
            <div className='flex flex-col gap-2'>
              <p className='text-base text-black'> Mutton Rice </p>
              <p className='text-sm block text-black text-semibold'> $8.05 </p>
            </div>

            <div className='group flex items-center gap-2 ml-auto cursor-pointer'> 
              <motion.div whileTap={{scale: 0.6}}>
                <BiMinus className='text-black'/>
              </motion.div>
              <p className='w-5 h-5 rounded-sm bg-cartBg text-black flex items-center justify-center '>
                1
              </p>
              <motion.div whileTap={{scale: 0.6}}>
                <BiPlus className='text-black'/>
              </motion.div>
            </div>

          </div>
        </div>

        <div className='w-full flex-1 bg-gray-200 rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2'>
          <div className='w-full flex items-center justify-between'>
            <p className='text-black text-lg'>Sub Total</p>
            <p className='text-black text-lg'>$ 8.05</p>
          </div>
          <div className='w-full flex items-center justify-between'>
            <p className='text-black text-lg'>Delivary</p>
            <p className='text-black text-lg'>$ 5.05</p>
          </div>
          <div className='w-full border-b border-gray-700 my-2'></div>
          <div className='w-full flex items-center justify-between'>
            <p className='text-black text-xl font-semibold'>Total</p>
            <p className='text-black text-xl font-semibold'>$ 13.10</p>
          </div>
          <motion.div
            whileTap={{ scale: 0.6 }}
            type='button'
            className='w-full p-2 flex items-center justify-center rounded-full bg-yellow-500 text-black text-lg my-2 font-bold transition-all duration-150 ease-out hover:shadow-lg cursor-pointer'
          >
              Check Out
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CartContainer