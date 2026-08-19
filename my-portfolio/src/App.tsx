import { useState } from 'react'
import { Navigate, Route , Routes } from 'react-router-dom'
import Projectpage from './pages/Projectpage'
import Projectdetailpage from './pages/Projectdetailpage'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Aboutme from './components/Aboutme'

function App() {

  return (
    <>
      <header>
        <Header/>
      </header>

      <Sidebar/>

      <div className='flex justify-center align-middle'>
        <main>
          <Routes>
            <Route path='/' element={<Navigate to='/projects' replace />} />
            <Route path='/projects' element={<Projectpage/>}/>
            <Route path='/projects/:slug' element={<Projectdetailpage/>}/>
          </Routes>
        </main> 
      </div>

    </>
  )
}

export default App
