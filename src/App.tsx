import './App.css'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from '@/pages/home'
import Mine from '@/pages/mine'
import TabBar from './components/tab-bar'

function App() {
  const navigator = useNavigate()
  const location = useLocation()
  const currentPageName = location.pathname
  const handleTabChange = (value: string) => {
    navigator(`/${value}`)
  }

  const showTabs = ['/', '/home', '/mine'].includes(currentPageName)
  return (
    <div className='relative min-h-screen'>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
        <Route path='/mine' element={<Mine />} />
      </Routes>
      {showTabs && <div className='absolute bottom-0 w-full'>
        <TabBar onTabChange={handleTabChange} />
      </div>}
    </div>
  )
}

export default App
