import React, { Suspense } from 'react'
import './Test.css'
import { Button } from '@mui/material'
import VideoPlayer from '../../components/VideoPlayer'
import Image360Viewer from '../../components/Image360Viewer'
import { Canvas } from '@react-three/fiber'
import RotatingModel from '../../components/RotatingModel'
import { Environment, OrbitControls } from '@react-three/drei'
import Chair from '../../components/model/Chair'
import Sofa from '../../components/model/Sofa'

const Test = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

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
          <div className='config'>
            <div className='model__container'>
              <VideoPlayer/>
            </div>
            <div className='heading'>Seamless Video Loop of 3D Object</div>
          </div>

          <div className='config'>
            <div className='model__container'>
              <Image360Viewer/>
            </div>
            <div className='heading'>Image Sequencing With Hover Effect</div>
          </div>

          <div className='config'>
            <div className='model__container'>
              <Canvas camera={{focus: 85}}>
                <ambientLight intensity={1}/>
                <Suspense fallback={null}>
                  <RotatingModel/>
                </Suspense>
                <Environment background={true} files='royal.hdr' />
              </Canvas>
            </div>
            <div className='heading'>Rotating 3D Model</div>
          </div>
        </div>
        <div className='row'>
          <div className='config'>
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
          <div className='config'>
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

export default Test