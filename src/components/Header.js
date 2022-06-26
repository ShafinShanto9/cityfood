import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MdAdd, MdLogout, MdShoppingBag } from "react-icons/md";
import { Link } from 'react-router-dom';
import { actionType } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';
import { app } from '../firebase.config';
import Avatar from '../img/avatar.png';
import Logo from '../img/logo.png';


const Header = () => {

  const provider = new GoogleAuthProvider();
  const firebaseAuth = getAuth(app);

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue()
  
  console.log(cartItems);
  
  const [isMenu, setIsMenu] = useState(false)
  

  // User Login
  const login = async () => {
    if (!user) {
      const {user:{refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider)
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0]
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]))
    } else {
      setIsMenu(!isMenu)
    }
  }
  // User LogOut

  const logOut = () => {
    setIsMenu(false)
    localStorage.clear()
    dispatch({
      type: actionType.SET_USER,
      user : null
    })
  }


  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow : !cartShow
    })
  }


  return (
      <header className='fixed z-50 w-screen p-3 px-4  md:p-6 md:px-16 bg-primary' >
          {/* Desktop And Tablet View */}
          <div className='hidden md:flex w-full h-full items-center justify-between'>
        <Link to={'/'}>
           <motion.div whileTap={{scale: 0.6}} className='flex items-center gap-1 cursor-pointer '>
                <img src={Logo} className='w-12 object-cover' alt="logo" />
                <p className='text-headingColor text-xl font-bold' >City Food</p>
              </motion.div>
        </Link>
        
        <div className='flex items-center gap-8'>
          <motion.ul
            initial={{opacity:0, x:200}}
            animate={{opacity:1, x:0}}
            exit={{opacity:0, x:200}}
            className='flex items-center gap-8'>
            <li className='text-base text-textColor duration-100 transition-all ease-in-out hover:text-headingColor cursor-pointer'>Home</li>
            <li className='text-base text-textColor duration-100 transition-all ease-in-out hover:text-headingColor cursor-pointer'>Menu</li>
            <li className='text-base text-textColor duration-100 transition-all ease-in-out hover:text-headingColor cursor-pointer'>About Us</li>
            <li className='text-base text-textColor duration-100 transition-all ease-in-out hover:text-headingColor cursor-pointer'>Service</li>
          </motion.ul>
          
          <div className='relative flex items-center justify-center ' onClick={showCart}>
          <MdShoppingBag className='text-textColor text-2xl cursor-pointer' />
            {cartItems && (
              <div className=' absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                <p className='text-xs text-textColor font-semibold'>{ cartItems.length}</p>
              </div> 
            ) }  
          </div>
          
          <div className='relative'>  
            <motion.img whileTap={{ scale: 0.6 }} src={user ? user?.photoURL : Avatar} onClick={login} className="w-10 min-w-[40px] h-10 min-h-[40px] cursor-pointer rounded-full " alt="userprofile" />
            {
              isMenu && (
                <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 absolute flex flex-col bg-gray-100 rounded-lg shadow-xl  top-12 right-0" >
                  <Link to='/createItem'>
                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base" onClick={()=>setIsMenu(false)}>New Item <MdAdd/></p>
                  </Link>
                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-red-400 hover:text-white transition-all duration-100 ease-in-out text-textColor text-base" onClick={logOut}>Logout <MdLogout/></p>
                </motion.div>
              )
            }
        </div>

       </div>        
      </div>
      
          {/* Mobile View */}
          <div className='flex items-center justify-between md:hidden w-full h-full '>
              <Link to={'/'}>
              <motion.div whileTap={{scale: 0.6}} className='flex items-center gap-1 cursor-pointer '>
                <img src={Logo} className='w-12 object-cover' alt="logo" />
                <p className='text-headingColor text-xl font-bold' >City Food</p>
              </motion.div>
        </Link>
        
        <div className='relative flex items-center justify-center gap-7' > 
            <div className='relative flex items-center justify-center' onClick={showCart}>
          <MdShoppingBag className='text-textColor text-2xl cursor-pointer' />
          {cartItems && cartItems > 0 && (
              <div className=' absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                <p className='text-xs text-textColor font-semibold'>{ cartItems.length}</p>
              </div> 
            ) }     
          </div>


            <motion.img whileTap={{ scale: 0.6 }} src={user ? user?.photoURL : Avatar} onClick={login} className="w-10 min-w-[40px] h-10 min-h-[40px] cursor-pointer rounded-full " alt="userprofile" />
            {
              isMenu && (
                <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 absolute flex flex-col bg-gray-100 rounded-lg shadow-xl  top-12 right-0" >
                <Link to="/createItem">
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base" onClick={()=>setIsMenu(false)}>New Item <MdAdd /></p>
                </Link>
                <ul
                    className='flex flex-col '>
                    <li className='text-base text-textColor duration-100 transition-all ease-in-out hover:text-headingColor cursor-pointer px-4 py-2' onClick={()=>setIsMenu(false)}>Home</li>
                    <li className='text-base text-textColor duration-100 transition-all ease-in-out hover:text-headingColor cursor-pointer px-4 py-2' onClick={()=>setIsMenu(false)}>Menu</li>
                    <li className='text-base text-textColor duration-100 transition-all ease-in-out hover:text-headingColor cursor-pointer px-4 py-2' onClick={()=>setIsMenu(false)}>About Us</li>
                    <li className='text-base text-textColor duration-100 transition-all ease-in-out hover:text-headingColor cursor-pointer px-4 py-2' onClick={()=>setIsMenu(false)}>Service</li>
                  </ul>
                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-red-400 hover:text-white transition-all duration-100 ease-in-out text-textColor text-base" onClick={logOut}>Logout <MdLogout/></p>
                </motion.div>
              )
            }
        </div>
          </div>
    </header>
  )
}

export default Header