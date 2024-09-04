/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 Chair2.gltf 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('./model/Chair2/Chair2.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.255, 0]} rotation={[0, 1.571, 0]} scale={0.294}>
        <mesh geometry={nodes.Cube006.geometry} material={materials.leather} />
        <mesh geometry={nodes.Cube006_1.geometry} material={materials['wood.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('./model/Chair2/Chair2.gltf')
