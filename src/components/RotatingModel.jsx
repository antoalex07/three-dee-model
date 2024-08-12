import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'
import Bottle from './model/Bottle'

const RotatingModel = () => {
    
    const modelRef = useRef();

    useFrame(() => {
        if(modelRef.current) {
            modelRef.current.rotation.y += 0.01
        }
    });

  return (
    <mesh ref={modelRef}>
        <Bottle/>
    </mesh>
  );
}

export default RotatingModel