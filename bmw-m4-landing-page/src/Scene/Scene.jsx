import React, { useRef, useEffect } from 'react'
import { Environment, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { Bmw } from '../assets/bmw'
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';



const Scene = ({ progress }) => {
  const cameraRef = useRef(null);
  useFrame(() => {
    console.log(cameraRef.current.position);
    cameraRef.current.lookAt(0, 0, 0);
  })

  useEffect(() => {
    const updateCamPos = () => {
      const positions = [[8.93, 1.27, 0.22],
      [4.96, 2.14, 9.80],
      [-0.09, 1.83, 11.30],
      [-0.09, 1.83, 14.30],
      [-4.80, 3.32 ,5.09],
      [1.58, 9.48, -0.00],
      [-4.54, 4.66, 5.56],
      [3.07, 2.76, 8.20],
      [-3.04, 2.06, -5.15],
      ]

      const fovValues = [40, 30, 70, 70, 60, 70, 70, 80, 50];

      if (progress >= 1) {
        gsap.to(cameraRef.current.position, {
          x: -3.04,
          y: 2.06,
          z: -7.15,
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
        // fov animation
  const startFov = fovValues[segmentIndex];
  const endFov = fovValues[segmentIndex + 1];
  const fov = startFov + (endFov - startFov) * percentage;

  gsap.to(cameraRef.current, {
    fov,
    duration: 0.5,
    ease: 'power1.out',
    onUpdate: () => cameraRef.current.updateProjectionMatrix(),
  });
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
        position={[8.93, 2.27, 0.22]}
      />
      <Environment preset="city" />
      <Bmw />
    </>
  )
}

export default Scene
