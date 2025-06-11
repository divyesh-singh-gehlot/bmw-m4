import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Bmw(props) {
  const { nodes, materials } = useGLTF('/bmw_g82_m4_with_adro_kit_2022__www.vecarz.com.glb')
  return (
    <group scale={200} {...props} dispose={null} position={[0, 0, 0]}>
      <group scale={0.01}>
        <primitive object={nodes._rootJoint} />
        <group position={[0, 0.089, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .untitledKit3_Paint_Geo_lodA_Kit3_Paint_Geo_lodA_BMW_M4CompetitionG82TNR3_2021PaintTNR_Material_004_untitledBMW_M4CompetitionG82TNR3_2021PaintTNR_Material_008_0
                .geometry
            }
            material={materials.untitledBMW_M4CompetitionG82TNR3_2021PaintTNR_Material_008}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .untitledKit3_Paint_Geo_lodA_Kit3_Paint_Geo_lodA_BMW_M4CompetitionG82TNR3_2021PaintTNR_Material_004_untitledBMW_M4CompetitionG82TNR3_2021Carbon1_Material_004_0
                .geometry
            }
            material={materials.untitledBMW_M4CompetitionG82TNR3_2021Carbon1_Material_004}
          />
        </group>
        <group position={[0, 0.089, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .untitledKit3_Window_Geo_lodA_Kit3_Window_Geo_lodA_BMW_M4CompetitionG82TNR3_2021Window_Material_untitledBMW_M4CompetitionG82TNR3_2021Window_Material1_0
                .geometry
            }
            material={materials.untitledBMW_M4CompetitionG82TNR3_2021Window_Material1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .untitledKit3_Window_Geo_lodA_Kit3_Window_Geo_lodA_BMW_M4CompetitionG82TNR3_2021Window_Material_phong1_0
                .geometry
            }
            material={materials.phong1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .untitledKit3_Window_Geo_lodA_Kit3_Window_Geo_lodA_BMW_M4CompetitionG82TNR3_2021Window_Material_untitledBMW_M4CompetitionG82TNR3_2021Coloured_Material_008_0
                .geometry
            }
            material={materials.untitledBMW_M4CompetitionG82TNR3_2021Coloured_Material_008}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .untitledHood3b_Carbon1M_Geo_lodA_Hood3b_Carbon1M_Geo_lodA_BMW_M4CompetitionG82TNR3_2021Carbon1M_Material_001_untitledBMW_M4CompetitionG82TNR3_2021Carbon1_Material_004_0
              .geometry
          }
          material={materials.untitledBMW_M4CompetitionG82TNR3_2021Carbon1_Material_004}
          position={[0, 0.089, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .untitledHood3b_Carbon1_Geo_lodA_Hood3b_Carbon1_Geo_lodA_BMW_M4CompetitionG82TNR3_2021Carbon1_Material_untitledBMW_M4CompetitionG82TNR3_2021Carbon1_Material_004_0
              .geometry
          }
          material={materials.untitledBMW_M4CompetitionG82TNR3_2021Carbon1_Material_004}
          position={[0, 0.089, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .untitledHood3b_Coloured_Geo_lodA_Hood3b_Coloured_Geo_lodA_BMW_M4CompetitionG82TNR3_2021Coloured_Material_001_untitledBMW_M4CompetitionG82TNR3_2021Coloured_Material_008_0
              .geometry
          }
          material={materials.untitledBMW_M4CompetitionG82TNR3_2021Coloured_Material_008}
          position={[0, 0.089, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .untitledHood3b_Grille1_Geo_lodA_Hood3b_Grille1_Geo_lodA_BMW_M4CompetitionG82TNR3_2021Hood3b_Grille1_Material_untitledBMW_M4CompetitionG82TNR3_2021Hood3b_Grille1_Material1_0
              .geometry
          }
          material={materials.untitledBMW_M4CompetitionG82TNR3_2021Hood3b_Grille1_Material1}
          position={[0, 0.089, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .untitledHood3b_Paint_Geo_lodA_Hood3b_Paint_Geo_lodA_BMW_M4CompetitionG82TNR3_2021PaintTNR_Material_001_untitledBMW_M4CompetitionG82TNR3_2021PaintTNR_Material_008_0
              .geometry
          }
          material={materials.untitledBMW_M4CompetitionG82TNR3_2021PaintTNR_Material_008}
          position={[0, 0.089, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .untitledWing3b_Badge_Geo_lodA_Wing3b_Badge_Geo_lodA_BMW_M4CompetitionG82TNR3_2021Wing3b_Badge_Material_untitledBMW_M4CompetitionG82TNR3_2021Wing3b_Badge_Material1_0
              .geometry
          }
          material={materials.untitledBMW_M4CompetitionG82TNR3_2021Wing3b_Badge_Material1}
          position={[0, 0.089, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .untitledWing3b_Carbon1_Geo_lodA_Wing3b_Carbon1_Geo_lodA_BMW_M4CompetitionG82TNR3_2021Carbon1_Material_001_untitledBMW_M4CompetitionG82TNR3_2021Carbon1_Material_004_0
              .geometry
          }
          material={materials.untitledBMW_M4CompetitionG82TNR3_2021Carbon1_Material_004}
          position={[0, 0.089, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .untitledWing3b_Coloured_Geo_lodA_Wing3b_Coloured_Geo_lodA_BMW_M4CompetitionG82TNR3_2021Coloured_Material_003_untitledBMW_M4CompetitionG82TNR3_2021Coloured_Material_008_0
              .geometry
          }
          material={materials.untitledBMW_M4CompetitionG82TNR3_2021Coloured_Material_008}
          position={[0, 0.089, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .untitledWing3b_Paint_Geo_lodA_Wing3b_Paint_Geo_lodA_BMW_M4CompetitionG82TNR3_2021PaintTNR_Material_003_untitledBMW_M4CompetitionG82TNR3_2021PaintTNR_Material_008_0
              .geometry
          }
          material={materials.untitledBMW_M4CompetitionG82TNR3_2021PaintTNR_Material_008}
          position={[0, 0.089, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .untitledEngine_Geo_lodA_Engine_Geo_lodA_BMW_M4CompetitionG82TNR3_2021EngineA_Material_untitledBMW_M4CompetitionG82TNR3_2021EngineA_Material1_0
              .geometry
          }
          material={materials.untitledBMW_M4CompetitionG82TNR3_2021EngineA_Material1}
          position={[0, 0.089, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .untitledGrilleNoAlpha5_Geo_lodA_GrilleNoAlpha5_Geo_lodA_BMW_M4CompetitionG82TNR3_2021GrilleNoAlpha5A_Material_untitledBMW_M4CompetitionG82TNR3_2021GrilleNoAlpha5A_Material1_0
              .geometry
          }
          material={materials.untitledBMW_M4CompetitionG82TNR3_2021GrilleNoAlpha5A_Material1}
          position={[0, 0.089, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .untitledGrilleNoAlpha6_Geo_lodA_GrilleNoAlpha6_Geo_lodA_BMW_M4CompetitionG82TNR3_2021GrilleNoAlpha6A_Material_untitledBMW_M4CompetitionG82TNR3_2021GrilleNoAlpha6A_Material1_0
              .geometry
          }
          material={materials.untitledBMW_M4CompetitionG82TNR3_2021GrilleNoAlpha6A_Material1}
          position={[0, 0.089, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .untitledGrilleNoAlpha7_Geo_lodA_GrilleNoAlpha7_Geo_lodA_BMW_M4CompetitionG82TNR3_2021GrilleNoAlpha7A_Material_untitledBMW_M4CompetitionG82TNR3_2021GrilleNoAlpha7A_Material1_0
              .geometry
          }
          material={materials.untitledBMW_M4CompetitionG82TNR3_2021GrilleNoAlpha7A_Material1}
          position={[0, 0.089, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .untitledGrilleNoAlpha8_Geo_lodA_GrilleNoAlpha8_Geo_lodA_BMW_M4CompetitionG82TNR3_2021GrilleNoAlpha8A_Material_untitledBMW_M4CompetitionG82TNR3_2021GrilleNoAlpha8A_Material1_0
              .geometry
          }
          material={materials.untitledBMW_M4CompetitionG82TNR3_2021GrilleNoAlpha8A_Material1}
          position={[0, 0.089, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .untitledGrilleNoAlpha9_Geo_lodA_GrilleNoAlpha9_Geo_lodA_BMW_M4CompetitionG82TNR3_2021GrilleNoAlpha9A_Material_untitledBMW_M4CompetitionG82TNR3_2021GrilleNoAlpha9A_Material1_0
              .geometry
          }
          material={materials.untitledBMW_M4CompetitionG82TNR3_2021GrilleNoAlpha9A_Material1}
          position={[0, 0.089, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .untitledInterior_Geo_lodA_Interior_Geo_lodA_BMW_M4CompetitionG82TNR3_2021InteriorA_Material_untitledBMW_M4CompetitionG82TNR3_2021InteriorA_Material1_0
              .geometry
          }
          material={materials.untitledBMW_M4CompetitionG82TNR3_2021InteriorA_Material1}
          position={[0, 0.089, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .untitledKit3_Badge_Geo_lodA_Kit3_Badge_Geo_lodA_BMW_M4CompetitionG82TNR3_2021BadgeD_Material_untitledBMW_M4CompetitionG82TNR3_2021BadgeD_Material1_0
              .geometry
          }
          material={materials.untitledBMW_M4CompetitionG82TNR3_2021BadgeD_Material1}
          position={[0, 0.089, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .untitledKit3_Base_Geo_lodA_Kit3_Base_Geo_lodA_BMW_M4CompetitionG82TNR3_2021Base_Material_untitledBMW_M4CompetitionG82TNR3_2021Base_Material1_0
              .geometry
          }
          material={materials.untitledBMW_M4CompetitionG82TNR3_2021Base_Material1}
          position={[0, 0.089, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .untitledKit3_Carbon1_Geo_lodA_Kit3_Carbon1_Geo_lodA_BMW_M4CompetitionG82TNR3_2021Carbon1_Material_002_untitledBMW_M4CompetitionG82TNR3_2021Carbon1_Material_004_0
              .geometry
          }
          material={materials.untitledBMW_M4CompetitionG82TNR3_2021Carbon1_Material_004}
          position={[0, 0.089, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .untitledKit3_Coloured_Geo_lodA_Kit3_Coloured_Geo_lodA_BMW_M4CompetitionG82TNR3_2021Coloured_Material_004_untitledBMW_M4CompetitionG82TNR3_2021Coloured_Material_008_0
              .geometry
          }
          material={materials.untitledBMW_M4CompetitionG82TNR3_2021Coloured_Material_008}
          position={[0, 0.089, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .untitledKit3_GrilleAlpha1_Geo_lodA_Kit3_GrilleAlpha1_Geo_lodA_BMW_M4CompetitionG82TNR3_2021GrilleAlpha1D_Material_untitledBMW_M4CompetitionG82TNR3_2021GrilleAlpha1D_Material1_0
              .geometry
          }
          material={materials.untitledBMW_M4CompetitionG82TNR3_2021GrilleAlpha1D_Material1}
          position={[0, 0.089, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .untitledKit3_GrilleNoAlpha2_Geo_lodA_Kit3_GrilleNoAlpha2_Geo_lodA_BMW_M4CompetitionG82TNR3_2021GrilleNoAlpha2D_Material_untitledBMW_M4CompetitionG82TNR3_2021GrilleNoAlpha2D_Material1_0
              .geometry
          }
          material={materials.untitledBMW_M4CompetitionG82TNR3_2021GrilleNoAlpha2D_Material1}
          position={[0, 0.089, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .untitledKit3_Light_Geo_lodA_Kit3_Light_Geo_lodA_BMW_M4CompetitionG82TNR3_2021LightD_Material_untitledBMW_M4CompetitionG82TNR3_2021LightD_Material1_0
              .geometry
          }
          material={materials.untitledBMW_M4CompetitionG82TNR3_2021LightD_Material1}
          position={[0, 0.089, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .untitledKit3_ManufacturerPlate_Geo_lodA_Kit3_ManufacturerPlate_Geo_lodA_BMW_M4CompetitionG82TNR3_2021ManufacturerPlateD_Material_untitledBMW_M4CompetitionG82TNR3_2021ManufacturerPlateD_Material1_0
              .geometry
          }
          material={materials.untitledBMW_M4CompetitionG82TNR3_2021ManufacturerPlateD_Material1}
          position={[0, 0.089, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .untitledKit3_WindowInside_Geo_lodA_Kit3_WindowInside_Geo_lodA_BMW_M4CompetitionG82TNR3_2021WindowInside_Material_untitledBMW_M4CompetitionG82TNR3_2021Window_Material1_0
              .geometry
          }
          material={materials.untitledBMW_M4CompetitionG82TNR3_2021Window_Material1}
          position={[0, 0.089, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .untitledSeatBelt_Geo_lodA_SeatBelt_Geo_lodA_BMW_M4CompetitionG82TNR3_2021SeatBelt_Material_untitledBMW_M4CompetitionG82TNR3_2021Coloured_Material_008_0
              .geometry
          }
          material={materials.untitledBMW_M4CompetitionG82TNR3_2021Coloured_Material_008}
          position={[0, 0.089, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/bmw_g82_m4_with_adro_kit_2022__www.vecarz.com.glb')