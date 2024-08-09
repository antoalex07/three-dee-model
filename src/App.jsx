import { Route, Routes } from 'react-router-dom'
import './App.css'
import Test from './pages/test/Test'

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Test/>} />
      </Routes>
    </div>
  )
}

export default App
