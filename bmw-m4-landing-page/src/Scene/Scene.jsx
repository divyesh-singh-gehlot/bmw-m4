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
      const positions = [[-0.05, 2.33,8.00],
      [4.96, 2.14, 9.80],
      [-0.09, 1.83, 11.30],
      [-0.09, 1.83, 14.30],
      [-4.80, 3.32, 5.09],
      [0.3, 9.53, 0.10],
      [-4.54, 4.66, 5.56],
      [3.07, 2.76, 8.20],
      [-3.04, 2.06, -6.15],
      ]

      const fovValues = [90, 40, 90, 50, 120, 80, 70, 70, 80];
      // const fovValues = [90, 40, 90, 90, 80, 60, 60, 90, 80];

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
        fov={60} near={0.01}
        far={10000} makeDefault
        position={[8.93, 2.27, 0.22]}
      />
      <Environment
        background={false} // can be true, false or "only" (which only sets the background) (default: false)
        backgroundBlurriness={0} // optional blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
        backgroundIntensity={1} // optional intensity factor (default: 1, only works with three 0.163 and up)
        backgroundRotation={[0, Math.PI / 2, 0]} // optional rotation (default: 0, only works with three 0.163 and up)
        environmentIntensity={1} // optional intensity factor (default: 1, only works with three 0.163 and up)
        environmentRotation={[0, Math.PI / 2, 0]} // optional rotation (default: 0, only works with three 0.163 and up)
        path="/"
        preset='forest'
        scene={undefined} // adds the ability to pass a custom THREE.Scene, can also be a ref
        encoding={undefined} // adds the ability to pass a custom THREE.TextureEncoding (default: THREE.sRGBEncoding for an array of files and THREE.LinearEncoding for a single texture)
      />

      <Bmw/>
    </>
  )
}

export default Scene
