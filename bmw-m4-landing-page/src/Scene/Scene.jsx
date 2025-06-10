import React, { useRef } from 'react'
import { Environment, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { Bmw } from '../assets/bmw'
import { useFrame } from '@react-three/fiber';


const Scene = ({ progress }) => {
  const cameraRef = useRef(null);
  useFrame(() => {
    // console.log(cameraRef.current.position);
    cameraRef.current.lookAt(0, 0, 0);
  })

  useEffect(() => {
    const updateCamPos = () => {
      const poitions = [[8.93, 1.27, 0.22],
      [4.96,2.14,7.80],
      [-0.09,1.83,9.30],
      [1.58,9.48,-0.00],
      [-4.54, 4.66, 5.56],
      [3.07, 2.76, 4.20],
      [-2.06, 1.98, -4.90],
      ]
    }
  }, [progress])


  return (
    <>
      <OrbitControls />
      <PerspectiveCamera ref={cameraRef}
        fov={45} near={0.1}
        far={10000} makeDefault
        position={[8.93, 1.27, 0.22]}
      />
      <Environment preset="city" />
      <Bmw />
    </>
  )
}

export default Scene
