import React, { Suspense, useRef, useState } from 'react'
import './RotateConfig.css'
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Environment, MeshReflectorMaterial, OrbitControls, PerspectiveCamera, PresentationControls, Stage } from '@react-three/drei';
import Bottle from '../../components/model/Bottle'
import Chair from '../../components/model/Chair'

const RotateConfig = () => {

  const CustomCamera = () => {
    
    const cameraRef = useRef();

    useFrame(() => {
        if(cameraRef.current) {
        console.log('Camera position:', cameraRef.current.position);
        console.log('Camera rotation:', cameraRef.current.rotation);
        }
    });

    return (
      <PerspectiveCamera ref={cameraRef} makeDefault position={[4.35, 3.31, -3.61]} fov={60} />
    )
  }

  const [ selectedOption, setSelectedOption ] = useState('bottle');
  
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  }

  const options = [
    { id: "bottle", label: "Bottle", src: "./bottleImage.png" },
    { id: "chair",  label: "Chair", src: "./chairImage.png" }
  ]

  const renderSelectedMedia = () => {
    if(selectedOption === 'bottle') {
      return (
          <Canvas>
            <PerspectiveCamera makeDefault position={[0.333, 2.332, 3.925]} rotation={[-0.415, 0.058, 3.925]} fov={65} />
            <ambientLight intensity={0.5}/>
            <Suspense fallback={null}>
              <Bottle/>
            </Suspense>
            <Environment files='royal.hdr' />
            <ContactShadows rotateX={Math.PI / 2} position={[0, 0, 0]} opacity={0.5} width={5} height={4} blur={0.3} far={4}/>
            <OrbitControls enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 3} enableZoom={false}/>
          </Canvas>
      )
    }
    else {
      return (
        <Canvas>
          <PerspectiveCamera makeDefault position={[0.513, 0.808, -0.931]} rotation={[-2.426, 0.394, 2.819]} fov={65} />
            {/* <CustomCamera/> */}
            <ambientLight intensity={0.5}/>
            <Suspense fallback={null}>
              <Chair/>
            </Suspense>
            <Environment files='royal.hdr' />
            <ContactShadows rotateX={Math.PI / 2} position={[0, 0, 0]} opacity={0.5} width={2} height={2.5} blur={0.1} far={4}/>
            <OrbitControls enablePan={false} minPolarAngle={Math.PI / 3.5} maxPolarAngle={Math.PI / 3.5} enableZoom={false}/>
          </Canvas>
      )
    }
  }

  return (
    <div className='rotateConfig'>
        <div className='container-1'>
            <div className='options'>
                { options.map((option) => (
                    <div  key={option.id}
                        className={`viewOption ${selectedOption === option.id ? 'selected' : ''}`}
                        onClick={() => handleOptionClick(option.id)}>
                    <img src={option.src} alt={option.label} className="optionThumbnail" />
                    </div>
                )) }
            </div>
            <div className="mediaSection">
                <div className="mediaContainer">{renderSelectedMedia()}</div>
            </div>
        </div>
      

      <div className='detailsContainer'>
        <div className="productInfo">
          <h2>Product Details</h2>
          <p>Lorem ipsum dolor sit amet,
             consectetur adipiscing elit, 
             sed do eiusmod tempor incididunt 
             ut labore et dolore magna aliqua. 
             Ut enim ad minim veniam, quis nostrud 
             exercitation ullamco laboris nisi ut 
             aliquip ex ea commodo consequat. 
             Duis aute irure dolor in reprehenderit 
             in voluptate velit esse cillum dolore 
             eu fugiat nulla pariatur. Excepteur sint 
             occaecat cupidatat non proident, sunt in 
             culpa qui officia deserunt mollit anim id est laborum.</p>
          <h3>Price: $499.99</h3>
          <button className="addToCartButton">Add to Cart</button>
        </div>

        <div className="customerReviews">
          <h2>Customer Reviews</h2>
          <div className="review">
            <h3>John Doe</h3>
            <p>⭐⭐⭐⭐⭐</p>
            <p>Absolutely love this model! The details are incredible and it looks amazing in my VR setup.</p>
          </div>
          <div className="review">
            <h3>Jane Smith</h3>
            <p>⭐⭐⭐⭐</p>
            <p>Great model, but the price is a bit high. Overall, I'm satisfied with my purchase.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RotateConfig