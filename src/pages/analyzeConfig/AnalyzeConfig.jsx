import { ContactShadows, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Chair from '../../components/model/Chair'
import './AnalyzeConfig.css'
import { DepthOfField, EffectComposer } from '@react-three/postprocessing'

const AnalyzeConfig = () => {

  return (
    <div className='analyzeConfig'>
      <div className='heading'>
        <h1>Product 360 Analyzer</h1>
      </div>
      <div className='model__container'>
        <Canvas>
          <PerspectiveCamera makeDefault position={[4.35, 3.31, -3.61]} fov={60} />
          <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
          <Suspense fallback={null}>
            <Chair/>
            <Environment files="chairBackground.hdr"/>
            <ContactShadows rotateX={Math.PI / 3} position={[0, -0.6, 0]} opacity={0.3} width={4} height={4} blur={0.3} far={4}/>
          </Suspense>
          <OrbitControls minDistance={3.5} maxDistance={5} />
        </Canvas>
      </div>
    </div>
  )
}

export default AnalyzeConfig