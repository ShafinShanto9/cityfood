import { motion } from 'framer-motion'
import { useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { useStateValue } from '../context/StateProvider'
const CartItems = ({ cart }) => {
    const [qty, setQty] = useState(1)
     const [{  cartItems }, dispatch] = useStateValue()

    const updateQty = (action, id) => {
        if (action == 'add') {
            setQty(qty + 1)

            cartItems.map(items => {
                if (items.id == id) {
                    items.qty += 1;
                }
            })

        }
    }

  return (
    <div key={cart.id} className='w-full p-1 px-2 rounded-lg bg-cartBg flex items-center gap-2'>
                <img src={cart.imageURL}
                  className='h-20 w-20 max-w-[60px] rounded-full object-contain' alt="" srcset="" />
                
                <div className='flex flex-col gap-2'>
                  <p className='text-base text-black'> {cart?.title} </p>
                  <p className='text-sm block text-black text-semibold'> $ {parseFloat(cart?.price) * qty} </p>
                </div>

                <div className='group flex items-center gap-2 ml-auto cursor-pointer'> 
                  <motion.div whileTap={{scale: 0.6}} onClick={()=>updateQty("remove", cart?.id)}>
                    <BiMinus className='text-black'/>
                  </motion.div>
                  <p className='w-5 h-5 rounded-sm bg-cartBg text-black flex items-center justify-center '>
                    {qty}
                  </p>
                  <motion.div whileTap={{scale: 0.6}} onClick={()=>updateQty("add", cart?.id)}>
                    <BiPlus className='text-black'/>
                  </motion.div>
                </div>

              </div>
  )
}

export default CartItems