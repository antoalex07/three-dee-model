import React, { Suspense } from 'react'
import './Home.css'
import { Button } from '@mui/material'
import VideoPlayer from '../../components/VideoPlayer'
import Image360Viewer from '../../components/Image360Viewer'
import { Canvas } from '@react-three/fiber'
import RotatingModel from '../../components/RotatingModel'
import { Environment, OrbitControls } from '@react-three/drei'
import Chair from '../../components/model/Chair'
import Sofa from '../../components/model/Sofa'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className='homePage'>

      <div className='header'>
        <div className='intro'>
          <h2>Integrating 3D Models</h2>
          <h1>Into Your Business</h1>
          <Button
              color='inherit' 
              variant='outlined' 
              sx={{
                textTransform: "none", 
                borderRadius: 0
              }}>
            Know More
          </Button>
        </div>
      </div>

      <div className='menu'>
        <div className='row'>
          
          <div className='config' onClick={() => navigate("/video-config")}>
            <div className='model__container'>
              <VideoPlayer/>
            </div>
            <div className='heading'>Seamless Video Loop of 3D Object</div>
          </div>

          <div className='config' onClick={() => navigate("/image-config")}>
            <div className='model__container'>
              <Image360Viewer/>
            </div>
            <div className='heading'>Image Sequencing With Hover Effect</div>
          </div>

          <div className='config' onClick={() => navigate("/rotate-config")}>
            <div className='model__container'>
              <Canvas camera={{focus: 85}}>
                <ambientLight intensity={1}/>
                <Suspense fallback={null}>
                  <RotatingModel/>
                </Suspense>
                <Environment preset='apartment' />
              </Canvas>
            </div>
            <div className='heading'>Rotating 3D Model</div>
          </div>
        </div>
        <div className='row'>

          <div className='config' onClick={() => navigate("/analyze-config")}>
            <div className="model__container">
              <Canvas camera={{position:[3, 3, 3], focus: 85, fov: 80 }}>
                <ambientLight intensity={1}/>
                <OrbitControls 
                    enableZoom={false}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 3}
                    minAzimuthAngle={-Infinity}
                    maxAzimuthAngle={Infinity}
                />
                <Suspense fallback={null}>
                  <Chair/>
                </Suspense>
                <Environment preset='sunset' />
              </Canvas>
            </div>
            <div className='heading'>Product 360 Analyzer</div>
          </div>

          <div className='config' onClick={() => navigate("/color-config")}>
            <div className='model__container'>
              <Canvas camera={{focus: 85}}>
                <ambientLight intensity={1}/>
                <OrbitControls 
                  enablePan={false}
                  enableZoom={false}
                  minPolarAngle={Math.PI / 3}
                  maxPolarAngle={Math.PI / 3}/>
                <Suspense fallback={null}>
                  <Sofa/>
                </Suspense>
                <Environment preset='sunset' />
              </Canvas>
            </div>
            <div className='heading'>Product Configurator</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home