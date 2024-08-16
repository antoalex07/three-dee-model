import React, { Suspense } from 'react'
import './Home.css'
import { Button } from '@mui/material'
import VideoPlayer from '../../components/VideoPlayer'
import Image360Viewer from '../../components/Image360Viewer'
import { Canvas } from '@react-three/fiber'
import RotatingModel from '../../components/RotatingModel'
import { ContactShadows, Environment, PerspectiveCamera } from '@react-three/drei'
import Shoe from '../../components/model/Shoe'
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
          
          <div className='config' onClick={() => navigate("/video-config")}>
            <div className='model__container'>
              <VideoPlayer/>
            </div>
            <div className='heading'>Seamless Video Loop of 3D Object</div>
          </div>

          <div className='config' onClick={() => navigate("/rotate-config")}>
            <div className='model__container'>
              <Canvas>
                <PerspectiveCamera makeDefault position={[2.606, 2.013, -1.729]} rotation={[-2.710, 0.920, 2.790]} fov={50} />
                <ambientLight intensity={0.5}/>
                <Suspense fallback={null}>
                  <RotatingModel/>
                </Suspense>
                <Environment files='royal.hdr' />
                <ContactShadows rotateX={Math.PI / 2} position={[0, 0, 0]} opacity={0.5} width={5} height={4} blur={0.3} far={4}/>
              </Canvas>
            </div>
            <div className='heading'>Rotating 3D Model</div>
          </div>

          <div className='config' onClick={() => navigate("/image-config")}>
            <div className='model__container'>
              <Image360Viewer/>
            </div>
            <div className='heading'>Image Sequencing With Hover Effect</div>
          </div>

          <div className='config' >
           {/* onClick={() => navigate("/color-config")}> */}
            <div className='model__container'>
              <Canvas>
                <PerspectiveCamera makeDefault position={[0.690, 0.538, 2.648]} rotation={[-0.2, 0.25, 0.0502]} />
                <ambientLight intensity={0.5}/>
                <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
                <Suspense fallback={null}>
                  <Shoe/>
                  <Environment files="royal.hdr" />
                  <ContactShadows rotateX={Math.PI / 3} position={[0, -0.9, 0]} opacity={0.1} width={4} height={4} blur={0.3} far={4}/>
                </Suspense>
              </Canvas>
            </div>
            <div className='heading'>Product Configurator</div>
          </div>
      </div>
    </div>
  )
}

export default Home