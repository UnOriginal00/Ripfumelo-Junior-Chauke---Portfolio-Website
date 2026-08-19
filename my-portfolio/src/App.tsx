import { useState } from 'react'
import { Route , Routes } from 'react-router-dom'
import Projectpage from './pages/Projectpage'
import Projectdetailpage from './pages/Projectdetailpage'

function App() {

  return (
    <>
        <main>
          <Routes>
            <Route path='/projects' element={<Projectpage/>}/>
            <Route path='/projects/:slug' element={<Projectdetailpage/>}/>
          </Routes>
        </main>
    </>
  )
}

export default App
