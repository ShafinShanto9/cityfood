import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { actionType } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';
let items = [];

const CartItems = ({ item, setFlag, flag }) => {
    
    const [{ cartItems }, dispatch] = useStateValue();
    const [qty, setQty] = useState(item?.qty);

    const cartDispatch = () => {
        localStorage.setItem("cartItems", JSON.stringify(items));
        dispatch({
        type: actionType.SET_CART_ITEMS,
        cartItems: items,
    });
    };

    const updateQty = (action, id) => {
        if (action == "add") {
        setQty(qty + 1);
        cartItems.map((item) => {
            if (item.id === id) {
                item.qty += 1;
                setFlag(flag + 1);
            }
    });
    cartDispatch();
    } else {
    // initial state value is one so you need to check if 1 then remove it
     if (qty == 1) {
        items = cartItems.filter((item) => item.id !== id);
        setFlag(flag + 1);
        cartDispatch();
    } else {
        setQty(qty - 1);
        cartItems.map((item) => {
        if (item.id === id) {
            item.qty -= 1;
            setFlag(flag + 1);
        }
    });
        cartDispatch();
    }
    }
    };

    useEffect(() => {
        items = cartItems;
    }, [qty, items]);

  return (
    <div  className='w-full p-1 px-2 rounded-lg bg-cartBg flex items-center gap-2'>
                <img src={item.imageURL}
                  className='h-20 w-20 max-w-[60px] rounded-full object-contain' alt="" srcset="" />
                
                <div className='flex flex-col gap-2'>
                  <p className='text-base text-black'> {item?.title} </p>
                  <p className='text-sm block text-black text-semibold'> $ {parseFloat(item?.price) * qty} </p>
                </div>

                <div className='group flex items-center gap-2 ml-auto cursor-pointer'> 
                  <motion.div whileTap={{scale: 0.6}} onClick={()=>updateQty("remove", item?.id)}>
                    <BiMinus className='text-black'/>
                  </motion.div>
                  <p className='w-5 h-5 rounded-sm bg-cartBg text-black flex items-center justify-center '>
                    {qty}
                  </p>
                  <motion.div whileTap={{scale: 0.6}} onClick={()=>updateQty("add", item?.id)}>
                    <BiPlus className='text-black'/>
                  </motion.div>
                </div>

              </div>
  )
}

export default CartItems