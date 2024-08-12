import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
// import VideoConfig from './pages/videoConfig/VideoConfig'
// import ImageConfig from './pages/imageConfig/ImageConfig'
// import RotateConfig from './pages/rotateConfig/RotateConfig'
// import AnalyzeConfig from './pages/analyzeConfig/AnalyzeConfig'
// import ColorConfig from './pages/colorConfig/ColorConfig'

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/'               element={<Home/>}           />
        {/* <Route path='/video-config'   element={<VideoConfig/>}    />
        <Route path='/image-config'   element={<ImageConfig/>}    />
        <Route path='/rotate-config'  element={<RotateConfig/>}   />
        <Route path='/analyze-config' element={<AnalyzeConfig/>}  />
        <Route path='/color-config'   element={<ColorConfig/>}    /> */}
      </Routes>
    </div>
  )
}

export default App
