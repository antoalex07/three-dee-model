import { Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'

const Home          = React.lazy(() => import('./pages/home/Home'));
const VideoConfig   = React.lazy(() => import('./pages/videoConfig/VideoConfig'));
const ImageConfig   = React.lazy(() => import('./pages/imageConfig/ImageConfig'));
const RotateConfig  = React.lazy(() => import('./pages/rotateConfig/RotateConfig'));
const AnalyzeConfig = React.lazy(() => import('./pages/analyzeConfig/AnalyzeConfig'));
const ColorConfig   = React.lazy(() => import('./pages/colorConfig/ColorConfig'));

function App() {

  return (
    <div className='app'>
          <Routes>
            <Route path='/'               element={<Home/>}           />
            <Route path='/video-config'   element={<VideoConfig/>}    />
            <Route path='/image-config'   element={<ImageConfig/>}    />
            <Route path='/rotate-config'  element={<RotateConfig/>}   />
            <Route path='/analyze-config' element={<AnalyzeConfig/>}  />
            <Route path='/color-config'   element={<ColorConfig/>}    />
          </Routes>
    </div>
  )
}

export default App
