import React, { Suspense } from 'react'
import Picker from '../../components/Picker'
import { Canvas } from '@react-three/fiber'
import Sofa from '../../components/model/Sofa1'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import './ColorConfig.css'

const ColorConfig = () => {
  return (
    <div className='colorConfig'>
      <div className='heading'>
        <h1>Product 360 Analyzer</h1>
      </div>
      <div className='model__container'>
        <Picker/>
        <Canvas>
          <ambientLight intensity={0.5}/>
          <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
          <Suspense fallback={null}>
            <Sofa/>
            <Environment files='royal.hdr'/>
            <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={2} far={1} />  
          </Suspense>
          <OrbitControls enablePan={false} />
        </Canvas>
      </div>
    </div>
  )
}

export default ColorConfig


// pixelRatio={[1, 1.5]}