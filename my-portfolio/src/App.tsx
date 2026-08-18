import { useState } from 'react'
import { Route , Routes } from 'react-router-dom'
import Projectpage from './pages/Projectpage'

function App() {

  return (
    <>
        <main>
          <Routes>
            <Route path='/projects' element={<Projectpage/>}/>
          </Routes>
        </main>
    </>
  )
}

export default App
