import { motion } from 'framer-motion'
import { MdOutlineKeyboardBackspace } from "react-icons/md"
import { RiRefreshFill } from "react-icons/ri"
import { actionType } from '../context/reducer'
import { useStateValue } from '../context/StateProvider'
import emptyCart from "../img/emptyCart.svg"
import CartItems from './CartItems'


const CartContainer = () => {

  const [{ cartShow, cartItems,user }, dispatch] = useStateValue()
  
  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow : !cartShow
    })
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}

      className="flex flex-col fixed top-0 right-0 z-[101] h-screen w-full md:w-375 bg-white drop-shadow-md ">

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
          {
            cartItems?.map((cart) => (              
                <CartItems cart={cart} />
            ))
          }
        </div>

      {/* Calculation Ara */}
        {cartItems && cartItems.length > 0 ? (
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
          
            {
              user ? (
                <motion.div
                  whileTap={{ scale: 0.6 }}
                  type='button'
                  className='w-full p-2 flex items-center justify-center rounded-full bg-yellow-500 text-black text-lg my-2 font-bold hover:shadow-lg cursor-pointer'
                >
                    Check Out
                </motion.div>
              ) : (
                  <motion.div
                  whileTap={{ scale: 0.6 }}
                  type='button'
                  className='w-full p-2 flex items-center justify-center rounded-full bg-yellow-500 text-black text-lg my-2 font-bold hover:shadow-lg cursor-pointer'
                >
                    Please Loged In First
                </motion.div>
              )
            }
        </div>
        ) : (
            <div className='w-full h-full flex flex-col items-center justify-center gap-6'>             
              <img src={emptyCart} className="w-300" alt="" srcset="" />
              <p className='text-xl text-black font-semibold'>You Have Any Items On Your Cart</p>
              </div>
        )}
      </div>
    </motion.div>
  )
}

export default CartContainer