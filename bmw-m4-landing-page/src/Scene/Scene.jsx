import React, { useRef, useEffect } from 'react'
import { Environment, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { Bmw } from '../assets/bmw'
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';



const Scene = ({ progress }) => {
  const cameraRef = useRef(null);
  useFrame(() => {
    // console.log(cameraRef.current.position);
    cameraRef.current.lookAt(0, 0, 0);
  })

  useEffect(() => {
    const updateCamPos = () => {
      const positions = [[8.93, 1.27, 0.22],
      [4.96, 2.14, 7.80],
      [-0.09, 1.83, 9.30],
      [-0.09, 1.83, 9.30],
      [-0.09, 1.83, 9.30],
      [1.58, 9.48, -0.00],
      [-4.54, 4.66, 5.56],
      [3.07, 2.76, 4.20],
      [-2.06, 1.98, -4.90],
      ]

      if (progress >= 1) {
        gsap.to(cameraRef.current.position, {
          x: -2.06,
          y: 1.98,
          z: -4.90,
          duration: .5,
          ease: 'power1.out',
        })
      }
      else {
        const segmentProgress = 1 / 8;
        const segmentIndex = Math.floor(progress / segmentProgress)
        // console.log(segmentIndex)
        const percentage = (progress % segmentProgress) / segmentProgress
        const [startX, startY, startZ] = positions[segmentIndex];
        const [endX, endY, endZ] = positions[segmentIndex + 1];
        const x = startX + (endX - startX) * percentage;
        const y = startY + (endY - startY) * percentage;
        const z = startZ + (endZ - startZ) * percentage;
        gsap.to(cameraRef.current.position, {
          x,
          y,
          z,
          duration: .5,
          ease: 'power1.out',
        }
        )
      }
    }


    updateCamPos()
  }, [progress, cameraRef.current])


  return (
    <>
      {/* <OrbitControls /> */}
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
