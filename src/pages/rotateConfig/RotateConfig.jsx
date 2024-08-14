import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Sofa from '../../components/model/Sofa123'
import { OrbitControls } from '@react-three/drei'

const RotateConfig = () => {

  return (
    <div className='rotateConfig'>
      <Canvas>
        <ambientLight intensity={1}/>
        <Suspense feedback={null}>
          <Sofa/>
        </Suspense>
        <OrbitControls/>
      </Canvas>
    </div>
  )
}

export default RotateConfig