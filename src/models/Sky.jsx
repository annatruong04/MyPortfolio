import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

import skyScence from '../assets/3d/sky.glb'

// Preload the model
useGLTF.preload(skyScence)

const Sky = ({ isRotating }) => {
    const sky = useGLTF(skyScence);
    const skyRef = useRef();

    useFrame((_, delta) => {
      if(isRotating) {
        skyRef.current.rotation.y += delta * 0.15
      }
    })
    
    return (
      <mesh ref={skyRef}>
          {/* Render the sky object */}
          <primitive object={sky.scene} />
      </mesh>
    )
}

export default Sky