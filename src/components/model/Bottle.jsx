/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 bottle.gltf 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('./model/bottle/bottle.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0, -1.5, 0]} rotation={[0.001, 0.04, -0.001]} scale={1.9}>
        <mesh geometry={nodes.Cap.geometry} material={materials.Cap} position={[-0.003, 1.964, -0.003]} rotation={[-0.001, 0, 0.001]} scale={0.238} />
        <mesh geometry={nodes.grip.geometry} material={materials['Wenbo glass shader']} position={[0, -0.062, 0]} rotation={[-0.001, 0, 0.001]} scale={[0.703, 0.707, 0.703]} />
        <mesh geometry={nodes.Label.geometry} material={materials['Swish_Oil_Label_(FINAL)-upscaled']} position={[-0.001, 0.759, -0.001]} rotation={[-0.001, 0, 0.001]} scale={0.724} />
        <mesh geometry={nodes.Liquid.geometry} material={materials.liquid} position={[-0.001, 1.026, -0.001]} rotation={[1.57, 0.001, 0]} scale={0.724} />
        <mesh geometry={nodes.Plane.geometry} material={materials['Wenbo glass shader']} position={[-0.001, 1.026, -0.001]} rotation={[1.57, 0.001, -1.317]} scale={0.724} />
      </group>
    </group>
  )
}

useGLTF.preload('./model/bottle/bottle.gltf')
