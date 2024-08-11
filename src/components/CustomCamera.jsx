import { PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'

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

export default CustomCamera