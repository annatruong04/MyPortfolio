import { useEffect, useRef } from 'react'

import birdScence from '../assets/3d/bird.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Bird = () => {
    // useGLTF is a hook that loads the glTF model or extract the scene and animation from the glTF model
    const { scene, animations } = useGLTF(birdScence)  
    const birdRef = useRef();
    const { actions } = useAnimations(animations, birdRef);
    //turn on the animation
    useEffect(() => {
        actions['Take 001'].play(); //automatically play the bird animation
    }, []);  
    
    useFrame(({clock, camera}) => {
        // update the y position that simulates the bird flying moving in a sin wave
        birdRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.2) + 2;

        // check if the bird reached a certain endpoint
        if (birdRef.current.position.x > camera.position.x + 10){
            //change the direction BACKWARD and ROTATE 180 degrees on the y axis
        birdRef.current.rotation.y = Math.PI;
        } else if (birdRef.current.position.x < camera.position.x - 10){
            //change the direction FORWARD and reset the rotation
            birdRef.current.rotation.y = 0;
        }
        
        // move the bird in a sin wave
        // if the bird is at the top of the sin wave, move it to the left
        // if the bird is at the bottom of the sin wave, move it to the right
        if (birdRef.current.rotation.y === 0){
            // MOVING FORWARD
            birdRef.current.position.x += 0.01;
            birdRef.current.position.z -= 0.01;
        } else {
            // MOVING BACKWARD
            birdRef.current.position.x -= 0.01;
            birdRef.current.position.z += 0.01;
        }
    })

    return (
        // we use the mesh component to create a 3D object
        // without the position the object will be at somewhere out of the screen or not shown
        <mesh 
        position={[-5, 2, 1]} 
        scale={[0.003, 0.003, 0.003]} 
        ref={birdRef} >
            <primitive object={scene} />
            
        </mesh>
  )
}

export default Bird