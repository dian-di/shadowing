import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from '@/pages/home'
import Mine from '@/pages/mine'

function App() {
  return (
    <div className='relative min-h-screen'>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
        <Route path='/mine' element={<Mine />} />
      </Routes>
    </div>
  )
}

export default App
