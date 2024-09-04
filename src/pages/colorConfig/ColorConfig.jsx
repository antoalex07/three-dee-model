import React, { Suspense } from 'react'
import './ColorConfig.css'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Sofa, { Configurator } from '../../components/model/Sofa'

const ColorConfig = () => {

  return (
    <div className='colorConfig'>
      <div className='model__container'>
        <Canvas>
          <PerspectiveCamera makeDefault position={[0.556, 2.906, 9.209]} rotation={[-0.231, 0.059, 0.013]} fov={10}/>
          <ambientLight intensity={3.5}/>
            <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
            <Suspense fallback={null}>
              <Sofa position={[0, -0.5, 0]}/>
              <Environment files="chairBackground.hdr"/>
              <ContactShadows rotateX={Math.PI / 3} position={[0, -0.5, 0]} opacity={0.5} width={4} height={4} blur={0.1} far={4}/>
            </Suspense>  
            <OrbitControls/>
          </Canvas>
      </div>
      <Configurator/>
    </div>
  )
}

export default ColorConfig