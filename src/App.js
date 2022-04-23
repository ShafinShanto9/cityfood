import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import CreateItem from './components/CreateItem'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter >
        <div className='h-screen w-screen flex flex-col' >
      <Header />
      
      <main className='w-full mt-16 md:mt-24 px-4 md:px-16 py-4'>
        <Routes>
          <Route path='/' element={<MainContainer />} />
          <Route path='/createItem' element={<CreateItem />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>

      </div>
    </AnimatePresence>
  )
}

export default App