import { Navigate, Route , Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Projectdetailpage from './pages/Projectdetailpage'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <header>
        <Header/>
      </header>

      <Sidebar/>

      <div className='flex w-full justify-center align-middle'>
        <main className='w-full'>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/projects' element={<Navigate to='/' replace />} />
            <Route path='/projects/:slug' element={<Projectdetailpage/>}/>
          </Routes>
        </main> 
      </div>

    </>
  )
}

export default App
