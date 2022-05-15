import { upload } from '@testing-library/user-event/dist/upload';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { MdFastfood, MdCloudUpload, MdDelete, MdFoodBank, MdAttachMoney } from 'react-icons/md';
import { storage } from '../firebase.config';
import { Categories } from '../utils/data';
import Loader from './Loader';

const CreateItem = () => {

  const [title, setTitle] = useState('')
  const [calorise, setCalorise] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState(null)
  const [imageAssests, setImageAssests] = useState(false)
  const [fields, setFields] = useState(false)
  const [alertStatus, setAlertStatus] = useState('danger')
  const [msg, setMsg] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const uploadImage = (e) => { //image upload fuctionality
    setIsLoading(true)
    const imageFile = e.target.files[0]
    const storageRef = ref(storage, `Image/${Date.now()}-${imageFile.name}`)
    const uploadData = uploadBytesResumable(storageRef, imageFile)

    uploadData.on('state_changed', (snapshot) => {
      const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    }, (error) => {
      console.log(error);
      setFields(true)
      setMsg("Something goes wrong while uploading")
      setAlertStatus('danger')
      setTimeout(() => {
        setFields(false)
        setIsLoading(false)
      }, 4000)
    }, () => {
      getDownloadURL(uploadData.snapshot.ref).then(downloadURL => {
        setImageAssests(downloadURL)
        setIsLoading(false)
        setFields(true)
        setMsg('Image Uploaded Successfully')
        setAlertStatus('success')

        setTimeout(() => {
          setFields(false)
        }, 4000);

      })
    })
  }

  const deleteImage = () => {

  }

  const saveDetails = () => {

  }

  return (
    <div className='w-full min-h-screen flex items-center justify-center '>
      <div className='w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4'>
        {
          fields && (
            <motion.p
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertStatus === 'danger' ? 'bg-red-400 text-red-800 ' :'bg-emerald-400 text-emerald-800'}`}
            > { msg}</motion.p>
          )
        }
        
        <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
          <MdFastfood className='text-xl text-yellow-600' />
          <input
            type="text"
            required
            value={title}
            placeholder="Give me a title....."
            onChange={(e)=> setTitle(e.target.value)}
            className='w-full h-full text-lg bg-transparent p-2 outline-none border-none placeholder:text-gray-00 text-textColor'
          
          />
        </div>

        <div className='w-full'> 
          <select onChange={(e) => setCategory(e.target.value)} className='outline-none w-full text-base border-b-2
          border-gray-200 p-2 rounded-md  cursor-pointer'>
            <option value="other" className='bg-white'>Select Categoriese</option>
            {
              Categories?.map(item => (
                <option key={item.id} className='text-base border-0 outline-none capitalize bg-white text-textColor' value={item.urlParamName}>
                  {item.name}
                </option>
              ))
            }
          </select>
        </div>
          
        <div className='group flex justify-center items-center flex-col border-2 border-dashed border-gray-300
        h-225 md:h-410 cursor-pointer w-full rounded-xl '>
          {
            isLoading ? <Loader /> : <>
              {!imageAssests ? <>
                <label className='w-full h-full flex flex-col justify-center items-center cursor-pointer'>
                  <div className='w-full h-full flex flex-col justify-center items-center gap-2' >
                    <MdCloudUpload className='text-3xl text-yellow-600 ' />
                    <p className='text-gray-500'>Click to upload</p>
                  </div>
                  <input
                    type="file"
                    name='uploadimage'
                    accept='image/*'
                    onChange={uploadImage}
                    className='w-0 h-0'
                  />
                </label>
              </> : <>
                  <div className='relative h-full '>
                    <img src={imageAssests} alt="uploaded image" className='w-full h-full object-cover' />
                    <button type='button' className='absolute bottom-3 right-3 rounded-full p-3 bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out '
                    onClick={deleteImage}
                    > <MdDelete className='text-white'/></button>
                </div>
              </>}
            </>
          }      
        </div>

        <div className='w-full flex flex-col md:flex-row items-center gap-3'>

          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <MdFoodBank className='text-yellow-600 text-2xl' />
            <input value={calorise} onChange={(e)=>{setCalorise(e.target.value)}} type="text" required placeholder='Calorise' className='h-full w-full bg-transparent text-lg outline-none border-none placeholder:text-gray-400 text-textColor' />
          </div>

          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <MdAttachMoney className='text-yellow-600 text-2xl' />
            <input value={price} onChange={(e)=>{ setPrice(e.target.value) }} type="text" required placeholder='Price' className='h-full w-full bg-transparent text-lg outline-none border-none placeholder:text-gray-400 text-textColor' />
          </div>
        </div>
        <div className='flex items-center w-full'>
          <button type='button' className='ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-yellow-500 px-12 py-2 rounded-lg text-lg text-textColor font-semibold ' onClick={saveDetails}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default CreateItem