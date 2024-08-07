import React, { Suspense } from 'react'
import Image360Viewer from '../components/Image360Viewer'
import { Canvas } from '@react-three/fiber'
import RotatingModel from '../components/RotatingModel'
import { Environment } from '@react-three/drei'

const Test = () => {

  return (
    <div className='test'>
            <Canvas>
              <ambientLight intensity={1}/>
              <Suspense fallback={null}>
                <RotatingModel/>
              </Suspense>
              <Environment preset='city' />
            </Canvas>
            <div className='heading'>Image Sequencing With Hover Effect</div>
    </div>
  )
}

export default Test