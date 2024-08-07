import { Button } from '@mui/material'
import React, { Suspense } from 'react'
import Image360Viewer from '../components/Image360Viewer'
import VideoPlayer from '../components/VideoPlayer'
import RotatingModel from '../components/RotatingModel'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

const Home = () => {
  return (
    <div className='home'>
      <div className='header'>
        <div className='background-image'/>
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
      
      <div className='configurations'>

        <div className='config'>
          <VideoPlayer/>
          <div className='heading'>Seamless Video Loop of 3D Object</div>
        </div>
        
        <div className='config'>
          <Image360Viewer/>
          <div className='heading'>Image Sequencing With Hover Effect</div>
        </div>

        <div className='config'>
          <Canvas>
            <ambientLight intensity={1}/>
            <Suspense fallback={null}>
              <RotatingModel/>
            </Suspense>
            <Environment preset='city' />
          </Canvas>
          <div className='heading-1'>Rotating 3D Model</div>
        </div>

      </div>
    </div>
  )
}

export default Home 