import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import RotatingModel from '../../components/RotatingModel'

const RotateConfig = () => {
  return (
    <div className='rotateConfig'>
      <div className='heading'>
        <h1>Rotating 3D Model</h1>
      </div>
      <div className='model__container'>
        <Canvas camera={{focus: 85}}>
          <ambientLight intensity={1}/>
          <Suspense fallback={null}>
            <RotatingModel/>
          </Suspense>
          <Environment preset='studio'/>
        </Canvas>
      </div>
    </div>
  )
}

export default RotateConfig