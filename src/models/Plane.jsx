import { useRef, useEffect } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei';

import planeScence from '../assets/3d/plane.glb';

// Preload the model
useGLTF.preload(planeScence);

const Plane = ({isRotating, ...props}) => {
    const ref = useRef();
    // Load the 3D model
    const { scene, animations } = useGLTF(planeScence);
    
    // Only use animations if they exist
    const { actions } = useAnimations(animations || [], ref);

    useEffect(() => {
        if (actions && actions['Take 001']) {
            if (isRotating) {
                actions['Take 001'].play();
            } else {
                actions['Take 001'].stop();
            }
        }
    }, [actions, isRotating]);
    
    return (
        <mesh ref={ref} {...props}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Plane