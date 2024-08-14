import React from 'react'

const Room = () => {
  return (
    <group>
        {/* Floor */}
        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[10, 10]}/>
            <meshStandardMaterial color="white"/>
        </mesh>

        {/* Back Wall */}
        <mesh position={[0, 2, -5]}>
            <planeGeometry args={[10, 6]}/>
            <meshStandardMaterial color="white"/>
        </mesh>

        {/* Left wall */}
        <mesh position={[-5, 2, 0]} rotation={[0, Math.PI / 2, 0]}>
            <planeGeometry args={[10, 6]}/>
            <meshStandardMaterial color="white"/>
        </mesh>
        
    </group>
  )
}

export default Room