import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateItem from './components/CreateItem'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <div className='h-screen w-screen flex flex-col' >
      <Header />
      
      <main className='mt-24 p-8 w-full'>
        <Routes>
          <Route path='/' element={<MainContainer />} />
          <Route path='/createItem' element={<CreateItem />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>

    </div>
  )
}

export default App