import React, { useRef } from 'react'
import { useGLTF, useAnimations} from '@react-three/drei'

export function Bmw(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/2021_bmw_m4_competition.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group scale={[1,1,1]} position={[0,0,0]} ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="3e4b27ffbea1449eab3ddd5f52827874fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.025}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Body"
                  position={[26.5, 42.029, 0.971]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={2.54}>
                  <group name="Object_5" position={[-32.707, -9.228, 10.316]}>
                    <mesh
                      name="Body_Material_#692_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Body_Material_#692_0'].geometry}
                      material={materials.Material_692}
                    />
                    <mesh
                      name="Body_Material_#694_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Body_Material_#694_0'].geometry}
                      material={materials.Material_694}
                    />
                    <mesh
                      name="Body_Material_#697_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Body_Material_#697_0'].geometry}
                      material={materials.Material_697}
                    />
                    <mesh
                      name="Body_Material_#698_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Body_Material_#698_0'].geometry}
                      material={materials.Material_698}
                    />
                    <mesh
                      name="Body_Material_#695_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Body_Material_#695_0'].geometry}
                      material={materials.Material_695}
                    />
                    <mesh
                      name="Body_Material_#696_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Body_Material_#696_0'].geometry}
                      material={materials.Material_696}
                    />
                    <mesh
                      name="Body_Material_#701_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Body_Material_#701_0'].geometry}
                      material={materials.Material_701}
                    />
                    <mesh
                      name="Body_Material_#699_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Body_Material_#699_0'].geometry}
                      material={materials.Material_699}
                    />
                    <mesh
                      name="Body_Material_#700_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Body_Material_#700_0'].geometry}
                      material={materials.Material_700}
                    />
                  </group>
                </group>
                <group
                  name="headlight"
                  position={[35.928, 37.016, 112.651]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={2.54}>
                  <group name="Object_16" position={[11.262, -7.254, 6.604]}>
                    <mesh
                      name="headlight_Material_#706_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['headlight_Material_#706_0'].geometry}
                      material={materials.Material_706}
                    />
                    <mesh
                      name="headlight_Material_#701_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['headlight_Material_#701_0'].geometry}
                      material={materials.Material_701}
                    />
                    <mesh
                      name="headlight_Material_#707_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['headlight_Material_#707_0'].geometry}
                      material={materials.Material_707}
                    />
                    <mesh
                      name="headlight_Material_#708_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['headlight_Material_#708_0'].geometry}
                      material={materials.Material_708}
                    />
                  </group>
                </group>
                <group
                  name="glsslight"
                  position={[42.072, 36.135, 110.235]}
                  scale={[2.54, 2.54, 3.193]}>
                  <mesh
                    name="glsslight_Material_#161_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['glsslight_Material_#161_0'].geometry}
                    material={materials.Material_161}
                  />
                  <mesh
                    name="glsslight_Material_#718_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['glsslight_Material_#718_0'].geometry}
                    material={materials.Material_718}
                  />
                  <mesh
                    name="glsslight_Material_#717_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['glsslight_Material_#717_0'].geometry}
                    material={materials.Material_717}
                  />
                  <mesh
                    name="glsslight_Material_#716_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['glsslight_Material_#716_0'].geometry}
                    material={materials.Material_716}
                  />
                </group>
                <group
                  name="glsslight001"
                  position={[32.119, 35.13, 116.369]}
                  scale={[2.351, 2.414, 3.193]}>
                  <mesh
                    name="glsslight001_Material_#161_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['glsslight001_Material_#161_0'].geometry}
                    material={materials.Material_161}
                  />
                  <mesh
                    name="glsslight001_Material_#718_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['glsslight001_Material_#718_0'].geometry}
                    material={materials.Material_718}
                  />
                  <mesh
                    name="glsslight001_Material_#717_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['glsslight001_Material_#717_0'].geometry}
                    material={materials.Material_717}
                  />
                  <mesh
                    name="glsslight001_Material_#716_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['glsslight001_Material_#716_0'].geometry}
                    material={materials.Material_716}
                  />
                </group>
                <group
                  name="bottom"
                  position={[0.104, 23.42, 2.101]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={2.54}>
                  <group name="Object_32" position={[-32.262, -1.901, 20.708]}>
                    <mesh
                      name="bottom_Material_#706_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['bottom_Material_#706_0'].geometry}
                      material={materials.Material_706}
                    />
                    <mesh
                      name="bottom_Material_#697_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['bottom_Material_#697_0'].geometry}
                      material={materials.Material_697}
                    />
                  </group>
                </group>
                <group
                  name="tail"
                  position={[30.736, 46.546, -109.43]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={2.54}>
                  <group name="Object_36" position={[-76.172, -11.006, 8.648]}>
                    <mesh
                      name="tail_Material_#694_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tail_Material_#694_0'].geometry}
                      material={materials.Material_694}
                    />
                    <mesh
                      name="tail_Material_#279_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tail_Material_#279_0'].geometry}
                      material={materials.Material_279}
                    />
                  </group>
                </group>
                <group
                  name="tailpiece"
                  position={[0.069, 46.375, -109.106]}
                  rotation={[Math.PI, 0, Math.PI]}
                  scale={[2.468, 2.468, 2.565]}>
                  <group name="Object_40" position={[-14.595, 0.031, 5.029]}>
                    <mesh
                      name="tailpiece_Material_#739_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tailpiece_Material_#739_0'].geometry}
                      material={materials.Material_739}
                    />
                    <mesh
                      name="tailpiece_Material_#738_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tailpiece_Material_#738_0'].geometry}
                      material={materials.Material_738}
                    />
                    <mesh
                      name="tailpiece_Material_#701_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tailpiece_Material_#701_0'].geometry}
                      material={materials.Material_701}
                    />
                    <mesh
                      name="tailpiece_Material_#697_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tailpiece_Material_#697_0'].geometry}
                      material={materials.Material_697}
                    />
                    <mesh
                      name="tailpiece_Material_#717_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tailpiece_Material_#717_0'].geometry}
                      material={materials.Material_717}
                    />
                    <mesh
                      name="tailpiece_Material_#740_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tailpiece_Material_#740_0'].geometry}
                      material={materials.Material_740}
                    />
                  </group>
                </group>
                <group
                  name="tire07"
                  position={[43.303, 18.508, 83.787]}
                  rotation={[0, 1.222, 0]}
                  scale={[2.54, 2.54, 3.446]}>
                  <group name="Object_48" position={[0, 0, 2.365]}>
                    <mesh
                      name="tire07_Material_#751_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tire07_Material_#751_0'].geometry}
                      material={materials.Material_751}
                    />
                    <mesh
                      name="tire07_Material_#752_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tire07_Material_#752_0'].geometry}
                      material={materials.Material_752}
                    />
                  </group>
                </group>
                <group
                  name="Rim"
                  position={[43.669, 18.508, 83.921]}
                  rotation={[0, 1.222, 0]}
                  scale={[2.636, 2.636, 2.516]}>
                  <group name="Object_52" position={[0.094, -5.477, 2.787]}>
                    <mesh
                      name="Rim_Material_#753_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Rim_Material_#753_0'].geometry}
                      material={materials.Material_753}
                    />
                  </group>
                </group>
                <group
                  name="tire06"
                  position={[46.944, 18.724, 85.109]}
                  rotation={[0, 1.222, 0]}
                  scale={[4.077, 4.077, 3.891]}>
                  <group name="Object_55" position={[0.466, -0.656, -0.008]}>
                    <mesh
                      name="tire06_Material_#694_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tire06_Material_#694_0'].geometry}
                      material={materials.Material_694}
                    />
                    <mesh
                      name="tire06_Material_#697_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tire06_Material_#697_0'].geometry}
                      material={materials.Material_697}
                    />
                    <mesh
                      name="tire06_Material_#362_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tire06_Material_#362_0'].geometry}
                      material={materials.Material_362}
                    />
                  </group>
                </group>
                <group
                  name="brake_disc"
                  position={[41.047, 18.497, 82.957]}
                  rotation={[0, 1.222, 0]}
                  scale={[2.661, 2.661, 0.569]}>
                  <group name="Object_60" position={[0, 0, 2.886]}>
                    <mesh
                      name="brake_disc_Material_#408_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['brake_disc_Material_#408_0'].geometry}
                      material={materials.Material_408}
                    />
                    <mesh
                      name="brake_disc_Material_#717_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['brake_disc_Material_#717_0'].geometry}
                      material={materials.Material_717}
                    />
                  </group>
                </group>
                <group
                  name="Brake"
                  position={[47.198, 15.683, 76.036]}
                  rotation={[0, 1.222, 2.892]}
                  scale={[1.683, 1.683, 1.708]}>
                  <group name="Object_64" position={[0.826, 0.024, -4.271]}>
                    <mesh
                      name="Brake_Material_#773_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Brake_Material_#773_0'].geometry}
                      material={materials.Material_773}
                    />
                    <mesh
                      name="Brake_Material_#697_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Brake_Material_#697_0'].geometry}
                      material={materials.Material_697}
                    />
                    <mesh
                      name="Brake_Material_#774_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Brake_Material_#774_0'].geometry}
                      material={materials.Material_774}
                    />
                  </group>
                </group>
                <group
                  name="headglass"
                  position={[0.033, 36.963, 112.743]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={2.54}>
                  <group name="Object_69" position={[11.298, -7.233, 20.736]}>
                    <mesh
                      name="headglass_Material_#775_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['headglass_Material_#775_0'].geometry}
                      material={materials.Material_775}
                    />
                  </group>
                </group>
                <group
                  name="tailglass"
                  position={[30.643, 46.528, -109.384]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={2.54}>
                  <group name="Object_72" position={[-76.154, -10.999, 8.685]}>
                    <mesh
                      name="tailglass_Material_#775_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tailglass_Material_#775_0'].geometry}
                      material={materials.Material_775}
                    />
                  </group>
                </group>
                <group
                  name="laseralumobj"
                  position={[42.022, 39.407, 108.531]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[2.54, 2.54, 0.818]}>
                  <mesh
                    name="laseralumobj_Material_#776_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['laseralumobj_Material_#776_0'].geometry}
                    material={materials.Material_776}
                  />
                </group>
                <group
                  name="diffuser_details"
                  position={[0.031, 20.014, -124.952]}
                  rotation={[Math.PI, 0, Math.PI]}
                  scale={2.54}>
                  <group name="Object_77" position={[-10.227, 0.025, -2.076]}>
                    <mesh
                      name="diffuser_details_Material_#694_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['diffuser_details_Material_#694_0'].geometry}
                      material={materials.Material_694}
                    />
                  </group>
                </group>
                <group
                  name="exhausts"
                  position={[-0.022, 17.459, -123.254]}
                  rotation={[Math.PI, 0, Math.PI]}
                  scale={2.54}>
                  <group name="Object_80" position={[-8.362, 0, -0.849]}>
                    <mesh
                      name="exhausts_Material_#698_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['exhausts_Material_#698_0'].geometry}
                      material={materials.Material_698}
                    />
                    <mesh
                      name="exhausts_Material_#717_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['exhausts_Material_#717_0'].geometry}
                      material={materials.Material_717}
                    />
                  </group>
                </group>
                <group
                  name="exhaust_muffler"
                  position={[0.029, 15.403, -111.166]}
                  rotation={[Math.PI, 0, Math.PI]}
                  scale={2.54}>
                  <group name="Object_84" position={[-5.545, 0.124, -3.17]}>
                    <mesh
                      name="exhaust_muffler_Material_#717_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['exhaust_muffler_Material_#717_0'].geometry}
                      material={materials.Material_717}
                    />
                    <mesh
                      name="exhaust_muffler_Material_#697_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['exhaust_muffler_Material_#697_0'].geometry}
                      material={materials.Material_697}
                    />
                  </group>
                </group>
                <group
                  name="Cylinder001"
                  position={[0.035, 51.696, -123.118]}
                  rotation={[Math.PI, 0, Math.PI]}
                  scale={2.54}>
                  <mesh
                    name="Cylinder001_Material_#786_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Cylinder001_Material_#786_0'].geometry}
                    material={materials.Material_786}
                  />
                  <mesh
                    name="Cylinder001_Material_#538_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Cylinder001_Material_#538_0'].geometry}
                    material={materials.Material_538}
                  />
                  <mesh
                    name="Cylinder001_Material_#787_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Cylinder001_Material_#787_0'].geometry}
                    material={materials.Material_787}
                  />
                </group>
                <group
                  name="Cylinder002"
                  position={[0.076, 38.924, 127.303]}
                  rotation={[-0.974, 0, 0]}
                  scale={[5.843, 5.683, 4.01]}>
                  <mesh
                    name="Cylinder002_Material_#790_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Cylinder002_Material_#790_0'].geometry}
                    material={materials.Material_790}
                  />
                  <mesh
                    name="Cylinder002_Material_#574_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Cylinder002_Material_#574_0'].geometry}
                    material={materials.Material_574}
                  />
                </group>
                <group
                  name="rooffin"
                  position={[0.076, 73.329, -52.212]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[2.685, 2.721, 2.442]}>
                  <group name="Object_95" position={[0.152, 1.057, -0.092]}>
                    <mesh
                      name="rooffin_Material_#698_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['rooffin_Material_#698_0'].geometry}
                      material={materials.Material_698}
                    />
                  </group>
                </group>
                <group
                  name="spoiler"
                  position={[0.075, 54.91, -119.655]}
                  rotation={[Math.PI, 0, Math.PI]}
                  scale={[2.54, 2.349, 1.257]}>
                  <group name="Object_98" position={[-6.35, -0.047, -3.319]}>
                    <mesh
                      name="spoiler_Material_#694_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['spoiler_Material_#694_0'].geometry}
                      material={materials.Material_694}
                    />
                  </group>
                </group>
                <group
                  name="Frontlogo"
                  position={[12.994, 35.13, 128.878]}
                  rotation={[-0.088, 0.149, 0]}
                  scale={[0.349, 0.358, 0.376]}>
                  <mesh
                    name="Frontlogo_Material_#801_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Frontlogo_Material_#801_0'].geometry}
                    material={materials.Material_801}
                  />
                  <mesh
                    name="Frontlogo_Material_#803_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Frontlogo_Material_#803_0'].geometry}
                    material={materials.Material_803}
                  />
                  <mesh
                    name="Frontlogo_Material_#802_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Frontlogo_Material_#802_0'].geometry}
                    material={materials.Material_802}
                  />
                  <mesh
                    name="Frontlogo_Material_#804_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Frontlogo_Material_#804_0'].geometry}
                    material={materials.Material_804}
                  />
                  <mesh
                    name="Frontlogo_Material_#805_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Frontlogo_Material_#805_0'].geometry}
                    material={materials.Material_805}
                  />
                </group>
                <group
                  name="rear_logo"
                  position={[-21.106, 51.687, -121.5]}
                  rotation={[-3.139, -0.185, -3.127]}
                  scale={[0.483, 0.502, 0.604]}>
                  <mesh
                    name="rear_logo_Material_#801_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['rear_logo_Material_#801_0'].geometry}
                    material={materials.Material_801}
                  />
                  <mesh
                    name="rear_logo_Material_#803_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['rear_logo_Material_#803_0'].geometry}
                    material={materials.Material_803}
                  />
                  <mesh
                    name="rear_logo_Material_#802_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['rear_logo_Material_#802_0'].geometry}
                    material={materials.Material_802}
                  />
                  <mesh
                    name="rear_logo_Material_#804_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['rear_logo_Material_#804_0'].geometry}
                    material={materials.Material_804}
                  />
                  <mesh
                    name="rear_logo_Material_#805_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['rear_logo_Material_#805_0'].geometry}
                    material={materials.Material_805}
                  />
                </group>
                <group
                  name="sidelogos"
                  position={[52.535, 37.744, 57.767]}
                  rotation={[-1.285, 1.472, 1.305]}
                  scale={[0.245, 0.251, 0.264]}>
                  <group
                    name="Object_113"
                    position={[-68.854, -1.059, 7.286]}
                    rotation={[0.003, 0.261, 0.024]}>
                    <mesh
                      name="sidelogos_Material_#801_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['sidelogos_Material_#801_0'].geometry}
                      material={materials.Material_801}
                    />
                    <mesh
                      name="sidelogos_Material_#803_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['sidelogos_Material_#803_0'].geometry}
                      material={materials.Material_803}
                    />
                    <mesh
                      name="sidelogos_Material_#802_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['sidelogos_Material_#802_0'].geometry}
                      material={materials.Material_802}
                    />
                    <mesh
                      name="sidelogos_Material_#804_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['sidelogos_Material_#804_0'].geometry}
                      material={materials.Material_804}
                    />
                    <mesh
                      name="sidelogos_Material_#805_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['sidelogos_Material_#805_0'].geometry}
                      material={materials.Material_805}
                    />
                  </group>
                </group>
                <group
                  name="Plate"
                  position={[0.059, 43.074, -121.837]}
                  rotation={[-3.056, 0, -Math.PI]}
                  scale={3.96}>
                  <mesh
                    name="Plate_Material_#826_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Plate_Material_#826_0'].geometry}
                    material={materials.Material_826}
                  />
                </group>
                <group
                  name="platebolts"
                  position={[-0.001, 43.07, -121.844]}
                  rotation={[-3.067, 0, -Math.PI]}
                  scale={0.765}>
                  <group name="Object_122" position={[-5.596, 3.661, 4.328]}>
                    <mesh
                      name="platebolts_Material_#717_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['platebolts_Material_#717_0'].geometry}
                      material={materials.Material_717}
                    />
                  </group>
                </group>
                <group name="fgrllpiece" position={[0.076, 24.309, 126.434]} scale={2.54}>
                  <mesh
                    name="fgrllpiece_Material_#694_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['fgrllpiece_Material_#694_0'].geometry}
                    material={materials.Material_694}
                  />
                  <mesh
                    name="fgrllpiece_Material_#697_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['fgrllpiece_Material_#697_0'].geometry}
                    material={materials.Material_697}
                  />
                </group>
                <group
                  name="bumpers"
                  position={[26.5, 42.029, 0.971]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={2.54}>
                  <group name="Object_128" position={[-32.707, -9.228, 10.316]}>
                    <mesh
                      name="bumpers_Material_#692_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['bumpers_Material_#692_0'].geometry}
                      material={materials.Material_692}
                    />
                    <mesh
                      name="bumpers_Material_#694_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['bumpers_Material_#694_0'].geometry}
                      material={materials.Material_694}
                    />
                    <mesh
                      name="bumpers_Material_#697_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['bumpers_Material_#697_0'].geometry}
                      material={materials.Material_697}
                    />
                    <mesh
                      name="bumpers_Material_#698_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['bumpers_Material_#698_0'].geometry}
                      material={materials.Material_698}
                    />
                    <mesh
                      name="bumpers_Material_#738_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['bumpers_Material_#738_0'].geometry}
                      material={materials.Material_738}
                    />
                  </group>
                </group>
                <group
                  name="grilles"
                  position={[26.5, 42.029, 0.971]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={2.54}>
                  <group name="Object_135" position={[-32.707, -9.228, 10.316]}>
                    <mesh
                      name="grilles_Material_#694_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['grilles_Material_#694_0'].geometry}
                      material={materials.Material_694}
                    />
                  </group>
                </group>
                <group
                  name="skirt"
                  position={[0.069, 13.508, 6.834]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={2.54}>
                  <group name="Object_138" position={[-30.398, 2.001, 20.722]}>
                    <mesh
                      name="skirt_Material_#692_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['skirt_Material_#692_0'].geometry}
                      material={materials.Material_692}
                    />
                    <mesh
                      name="skirt_Material_#694_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['skirt_Material_#694_0'].geometry}
                      material={materials.Material_694}
                    />
                  </group>
                </group>
                <group
                  name="seats"
                  position={[20.871, 41.556, -3.684]}
                  rotation={[0, 1.571, 0]}
                  scale={[2.54, 2.54, 2.675]}>
                  <group name="Object_142" position={[-2.283, -8.567, -1.899]}>
                    <mesh
                      name="seats_Material_#694_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['seats_Material_#694_0'].geometry}
                      material={materials.Material_694}
                    />
                    <mesh
                      name="seats_Material_#706_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['seats_Material_#706_0'].geometry}
                      material={materials.Material_706}
                    />
                    <mesh
                      name="seats_Material_#700_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['seats_Material_#700_0'].geometry}
                      material={materials.Material_700}
                    />
                    <mesh
                      name="seats_Material_#717_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['seats_Material_#717_0'].geometry}
                      material={materials.Material_717}
                    />
                    <mesh
                      name="seats_Material_#847_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['seats_Material_#847_0'].geometry}
                      material={materials.Material_847}
                    />
                    <mesh
                      name="seats_Material_#848_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['seats_Material_#848_0'].geometry}
                      material={materials.Material_848}
                    />
                    <mesh
                      name="seats_Material_#849_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['seats_Material_#849_0'].geometry}
                      material={materials.Material_849}
                    />
                    <mesh
                      name="seats_Material_#850_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['seats_Material_#850_0'].geometry}
                      material={materials.Material_850}
                    />
                    <mesh
                      name="seats_Material_#695_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['seats_Material_#695_0'].geometry}
                      material={materials.Material_695}
                    />
                    <mesh
                      name="seats_Material_#803_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['seats_Material_#803_0'].geometry}
                      material={materials.Material_803}
                    />
                    <mesh
                      name="seats_Material_#804_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['seats_Material_#804_0'].geometry}
                      material={materials.Material_804}
                    />
                    <mesh
                      name="seats_Material_#805_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['seats_Material_#805_0'].geometry}
                      material={materials.Material_805}
                    />
                  </group>
                </group>
                <group
                  name="glass"
                  position={[0.068, 61.633, -23.575]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={2.54}>
                  <group name="Object_156" position={[-42.37, -16.946, 20.722]}>
                    <mesh
                      name="glass_Material_#699_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['glass_Material_#699_0'].geometry}
                      material={materials.Material_699}
                    />
                  </group>
                </group>
                <group
                  name="InteriorAlcntr"
                  position={[0.461, 65.722, -21.494]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={2.54}>
                  <mesh
                    name="InteriorAlcntr_Material_#850_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['InteriorAlcntr_Material_#850_0'].geometry}
                    material={materials.Material_850}
                  />
                  <mesh
                    name="InteriorAlcntr_Material_#706_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['InteriorAlcntr_Material_#706_0'].geometry}
                    material={materials.Material_706}
                  />
                  <mesh
                    name="InteriorAlcntr_Material_#694_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['InteriorAlcntr_Material_#694_0'].geometry}
                    material={materials.Material_694}
                  />
                  <mesh
                    name="InteriorAlcntr_Material_#1860_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['InteriorAlcntr_Material_#1860_0'].geometry}
                    material={materials.Material_1860}
                  />
                  <mesh
                    name="InteriorAlcntr_Material_#697_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['InteriorAlcntr_Material_#697_0'].geometry}
                    material={materials.Material_697}
                  />
                </group>
                <group
                  name="Steering_Wheel"
                  position={[20.846, 48.678, 21.491]}
                  rotation={[-2.967, 0, -Math.PI]}
                  scale={[1.105, 1.105, 1.061]}>
                  <mesh
                    name="Steering_Wheel_Material_#706_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Steering_Wheel_Material_#706_0'].geometry}
                    material={materials.Material_706}
                  />
                  <mesh
                    name="Steering_Wheel_Material_#1063_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Steering_Wheel_Material_#1063_0'].geometry}
                    material={materials.Material_1063}
                  />
                  <mesh
                    name="Steering_Wheel_Material_#698_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Steering_Wheel_Material_#698_0'].geometry}
                    material={materials.Material_698}
                  />
                  <mesh
                    name="Steering_Wheel_Material_#694_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Steering_Wheel_Material_#694_0'].geometry}
                    material={materials.Material_694}
                  />
                  <mesh
                    name="Steering_Wheel_Material_#805_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Steering_Wheel_Material_#805_0'].geometry}
                    material={materials.Material_805}
                  />
                </group>
                <group
                  name="Brake001"
                  position={[44.868, 15.401, -78.729]}
                  rotation={[2.985, Math.PI / 2, 0]}
                  scale={[1.479, 0.977, 1.531]}>
                  <group name="Object_171" position={[0.826, 0.024, -4.271]}>
                    <mesh
                      name="Brake001_Material_#773_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Brake001_Material_#773_0'].geometry}
                      material={materials.Material_773}
                    />
                    <mesh
                      name="Brake001_Material_#697_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Brake001_Material_#697_0'].geometry}
                      material={materials.Material_697}
                    />
                    <mesh
                      name="Brake001_Material_#774_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Brake001_Material_#774_0'].geometry}
                      material={materials.Material_774}
                    />
                  </group>
                </group>
                <group
                  name="Rim001"
                  position={[44.248, 18.508, -70.489]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[2.636, 2.636, 2.516]}>
                  <group name="Object_176" position={[0.094, -5.477, 2.787]}>
                    <mesh
                      name="Rim001_Material_#753_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Rim001_Material_#753_0'].geometry}
                      material={materials.Material_753}
                    />
                  </group>
                </group>
                <group
                  name="brake_disc001"
                  position={[41.455, 18.497, -70.498]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[2.248, 2.248, 0.481]}>
                  <group name="Object_179" position={[0, 0, 2.886]}>
                    <mesh
                      name="brake_disc001_Material_#408_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['brake_disc001_Material_#408_0'].geometry}
                      material={materials.Material_408}
                    />
                    <mesh
                      name="brake_disc001_Material_#717_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['brake_disc001_Material_#717_0'].geometry}
                      material={materials.Material_717}
                    />
                  </group>
                </group>
                <group
                  name="tire008"
                  position={[47.732, 18.724, -70.492]}
                  rotation={[0, 1.571, 0]}
                  scale={[4.077, 4.077, 3.891]}>
                  <group name="Object_183" position={[0.466, -0.656, -0.008]}>
                    <mesh
                      name="tire008_Material_#694_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tire008_Material_#694_0'].geometry}
                      material={materials.Material_694}
                    />
                    <mesh
                      name="tire008_Material_#697_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tire008_Material_#697_0'].geometry}
                      material={materials.Material_697}
                    />
                    <mesh
                      name="tire008_Material_#362_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tire008_Material_#362_0'].geometry}
                      material={materials.Material_362}
                    />
                  </group>
                </group>
                <group
                  name="tire009"
                  position={[43.858, 18.508, -70.489]}
                  rotation={[0, 1.571, 0]}
                  scale={[2.54, 2.54, 3.446]}>
                  <group name="Object_188" position={[0, 0, 2.365]}>
                    <mesh
                      name="tire009_Material_#751_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tire009_Material_#751_0'].geometry}
                      material={materials.Material_751}
                    />
                    <mesh
                      name="tire009_Material_#752_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tire009_Material_#752_0'].geometry}
                      material={materials.Material_752}
                    />
                  </group>
                </group>
                <group
                  name="Brake002"
                  position={[-42.564, 15.637, 76.361]}
                  rotation={[Math.PI, -1.222, 0.361]}
                  scale={[1.683, 1.683, 1.708]}>
                  <group name="Object_192" position={[0.826, 0.024, -4.271]}>
                    <mesh
                      name="Brake002_Material_#773_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Brake002_Material_#773_0'].geometry}
                      material={materials.Material_773}
                    />
                    <mesh
                      name="Brake002_Material_#697_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Brake002_Material_#697_0'].geometry}
                      material={materials.Material_697}
                    />
                    <mesh
                      name="Brake002_Material_#774_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Brake002_Material_#774_0'].geometry}
                      material={materials.Material_774}
                    />
                  </group>
                </group>
                <group
                  name="Brake003"
                  position={[-45.002, 15.401, -63.633]}
                  rotation={[-2.985, -Math.PI / 2, 0]}
                  scale={[1.479, 0.977, 1.531]}>
                  <group name="Object_197" position={[0.826, 0.024, -4.271]}>
                    <mesh
                      name="Brake003_Material_#773_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Brake003_Material_#773_0'].geometry}
                      material={materials.Material_773}
                    />
                    <mesh
                      name="Brake003_Material_#697_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Brake003_Material_#697_0'].geometry}
                      material={materials.Material_697}
                    />
                    <mesh
                      name="Brake003_Material_#774_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Brake003_Material_#774_0'].geometry}
                      material={materials.Material_774}
                    />
                  </group>
                </group>
                <group
                  name="Rim002"
                  position={[-44.996, 18.508, 84.856]}
                  rotation={[Math.PI, -1.222, Math.PI]}
                  scale={[2.636, 2.636, 2.516]}>
                  <group name="Object_202" position={[0.094, -5.477, 2.787]}>
                    <mesh
                      name="Rim002_Material_#753_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Rim002_Material_#753_0'].geometry}
                      material={materials.Material_753}
                    />
                  </group>
                </group>
                <group
                  name="Rim003"
                  position={[-44.383, 18.508, -70.381]}
                  rotation={[0, -1.571, 0]}
                  scale={[2.636, 2.636, 2.516]}>
                  <group name="Object_205" position={[0.094, -5.477, 2.787]}>
                    <mesh
                      name="Rim003_Material_#753_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Rim003_Material_#753_0'].geometry}
                      material={materials.Material_753}
                    />
                  </group>
                </group>
                <group
                  name="brake_disc002"
                  position={[-42.374, 18.497, 85.819]}
                  rotation={[Math.PI, -1.222, Math.PI]}
                  scale={[2.661, 2.661, 0.569]}>
                  <group name="Object_208" position={[0, 0, 2.886]}>
                    <mesh
                      name="brake_disc002_Material_#408_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['brake_disc002_Material_#408_0'].geometry}
                      material={materials.Material_408}
                    />
                    <mesh
                      name="brake_disc002_Material_#717_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['brake_disc002_Material_#717_0'].geometry}
                      material={materials.Material_717}
                    />
                  </group>
                </group>
                <group
                  name="brake_disc003"
                  position={[-41.589, 18.497, -71.864]}
                  rotation={[0, -1.571, 0]}
                  scale={[2.248, 2.248, 0.481]}>
                  <group name="Object_212" position={[0, 0, 2.886]}>
                    <mesh
                      name="brake_disc003_Material_#408_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['brake_disc003_Material_#408_0'].geometry}
                      material={materials.Material_408}
                    />
                    <mesh
                      name="brake_disc003_Material_#717_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['brake_disc003_Material_#717_0'].geometry}
                      material={materials.Material_717}
                    />
                  </group>
                </group>
                <group
                  name="tire010"
                  position={[-47.867, 18.724, -70.378]}
                  rotation={[0, -1.571, 0]}
                  scale={[4.077, 4.077, 3.891]}>
                  <group name="Object_216" position={[0.466, -0.656, -0.008]}>
                    <mesh
                      name="tire010_Material_#694_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tire010_Material_#694_0'].geometry}
                      material={materials.Material_694}
                    />
                    <mesh
                      name="tire010_Material_#697_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tire010_Material_#697_0'].geometry}
                      material={materials.Material_697}
                    />
                    <mesh
                      name="tire010_Material_#362_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tire010_Material_#362_0'].geometry}
                      material={materials.Material_362}
                    />
                  </group>
                </group>
                <group
                  name="tire011"
                  position={[-43.993, 18.508, -70.381]}
                  rotation={[0, -1.571, 0]}
                  scale={[2.54, 2.54, 3.446]}>
                  <group name="Object_221" position={[0, 0, 2.365]}>
                    <mesh
                      name="tire011_Material_#751_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tire011_Material_#751_0'].geometry}
                      material={materials.Material_751}
                    />
                    <mesh
                      name="tire011_Material_#752_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tire011_Material_#752_0'].geometry}
                      material={materials.Material_752}
                    />
                  </group>
                </group>
                <group
                  name="tire012"
                  position={[-48.271, 18.724, 83.667]}
                  rotation={[Math.PI, -1.222, Math.PI]}
                  scale={[4.077, 4.077, 3.891]}>
                  <group name="Object_225" position={[0.466, -0.656, -0.008]}>
                    <mesh
                      name="tire012_Material_#694_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tire012_Material_#694_0'].geometry}
                      material={materials.Material_694}
                    />
                    <mesh
                      name="tire012_Material_#697_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tire012_Material_#697_0'].geometry}
                      material={materials.Material_697}
                    />
                    <mesh
                      name="tire012_Material_#362_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tire012_Material_#362_0'].geometry}
                      material={materials.Material_362}
                    />
                  </group>
                </group>
                <group
                  name="tire013"
                  position={[-44.629, 18.508, 84.989]}
                  rotation={[Math.PI, -1.222, Math.PI]}
                  scale={[2.54, 2.54, 3.446]}>
                  <group name="Object_230" position={[0, 0, 2.365]}>
                    <mesh
                      name="tire013_Material_#751_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tire013_Material_#751_0'].geometry}
                      material={materials.Material_751}
                    />
                    <mesh
                      name="tire013_Material_#752_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['tire013_Material_#752_0'].geometry}
                      material={materials.Material_752}
                    />
                  </group>
                </group>
                <group
                  name="Driver_Door"
                  position={[51.563, 36.364, 41.666]}
                  rotation={[0, 1.571, 0]}
                  scale={2.54}>
                  <group name="Object_234" position={[-16.685, -6.998, 0.449]}>
                    <mesh
                      name="Driver_Door_Material_#692_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Driver_Door_Material_#692_0'].geometry}
                      material={materials.Material_692}
                    />
                    <mesh
                      name="Driver_Door_Material_#697_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Driver_Door_Material_#697_0'].geometry}
                      material={materials.Material_697}
                    />
                    <mesh
                      name="Driver_Door_Material_#694_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Driver_Door_Material_#694_0'].geometry}
                      material={materials.Material_694}
                    />
                    <mesh
                      name="Driver_Door_Material_#699_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Driver_Door_Material_#699_0'].geometry}
                      material={materials.Material_699}
                    />
                    <mesh
                      name="Driver_Door_Material_#698_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Driver_Door_Material_#698_0'].geometry}
                      material={materials.Material_698}
                    />
                    <mesh
                      name="Driver_Door_Material_#932_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Driver_Door_Material_#932_0'].geometry}
                      material={materials.Material_932}
                    />
                    <mesh
                      name="Driver_Door_Material_#706_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Driver_Door_Material_#706_0'].geometry}
                      material={materials.Material_706}
                    />
                    <mesh
                      name="Driver_Door_Material_#849_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Driver_Door_Material_#849_0'].geometry}
                      material={materials.Material_849}
                    />
                    <mesh
                      name="Driver_Door_Material_#695_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Driver_Door_Material_#695_0'].geometry}
                      material={materials.Material_695}
                    />
                    <mesh
                      name="Driver_Door_Material_#847_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Driver_Door_Material_#847_0'].geometry}
                      material={materials.Material_847}
                    />
                    <mesh
                      name="Driver_Door_Material_#1824_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Driver_Door_Material_#1824_0'].geometry}
                      material={materials.Material_1824}
                    />
                  </group>
                </group>
                <group
                  name="Dashboard"
                  position={[17.744, 51.683, 40.011]}
                  rotation={[Math.PI, 0, Math.PI]}
                  scale={[2.54, 2.263, 2.118]}>
                  <mesh
                    name="Dashboard_Material_#706_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Dashboard_Material_#706_0'].geometry}
                    material={materials.Material_706}
                  />
                  <mesh
                    name="Dashboard_Material_#694_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Dashboard_Material_#694_0'].geometry}
                    material={materials.Material_694}
                  />
                  <mesh
                    name="Dashboard_Material_#775_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Dashboard_Material_#775_0'].geometry}
                    material={materials.Material_775}
                  />
                  <mesh
                    name="Dashboard_Material_#700_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Dashboard_Material_#700_0'].geometry}
                    material={materials.Material_700}
                  />
                  <mesh
                    name="Dashboard_Material_#849_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Dashboard_Material_#849_0'].geometry}
                    material={materials.Material_849}
                  />
                  <mesh
                    name="Dashboard_Material_#697_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Dashboard_Material_#697_0'].geometry}
                    material={materials.Material_697}
                  />
                  <mesh
                    name="Dashboard_Material_#1082_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Dashboard_Material_#1082_0'].geometry}
                    material={materials.Material_1082}
                  />
                  <mesh
                    name="Dashboard_Material_#699_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Dashboard_Material_#699_0'].geometry}
                    material={materials.Material_699}
                  />
                  <mesh
                    name="Dashboard_Material_#698_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Dashboard_Material_#698_0'].geometry}
                    material={materials.Material_698}
                  />
                  <mesh
                    name="Dashboard_Material_#1001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Dashboard_Material_#1001_0'].geometry}
                    material={materials.Material_1001}
                  />
                  <mesh
                    name="Dashboard_Material_#1522_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Dashboard_Material_#1522_0'].geometry}
                    material={materials.Material_1522}
                  />
                  <mesh
                    name="Dashboard_Material_#1548_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Dashboard_Material_#1548_0'].geometry}
                    material={materials.Material_1548}
                  />
                </group>
                <group
                  name="Box003"
                  position={[20.748, 39.372, 36.475]}
                  rotation={[-1.489, 0, 0]}
                  scale={[1.224, 1.085, 1.139]}>
                  <mesh
                    name="Box003_Material_#706_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Box003_Material_#706_0'].geometry}
                    material={materials.Material_706}
                  />
                </group>
                <group
                  name="Object002"
                  position={[0.069, 13.508, 6.834]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={2.54}>
                  <group name="Object_262" position={[-30.398, 2.001, 20.722]}>
                    <mesh
                      name="Object002_Material_#692_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object002_Material_#692_0'].geometry}
                      material={materials.Material_692}
                    />
                    <mesh
                      name="Object002_Material_#700_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object002_Material_#700_0'].geometry}
                      material={materials.Material_700}
                    />
                    <mesh
                      name="Object002_Material_#694_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object002_Material_#694_0'].geometry}
                      material={materials.Material_694}
                    />
                    <mesh
                      name="Object002_Material_#706_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object002_Material_#706_0'].geometry}
                      material={materials.Material_706}
                    />
                    <mesh
                      name="Object002_Material_#849_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object002_Material_#849_0'].geometry}
                      material={materials.Material_849}
                    />
                    <mesh
                      name="Object002_Material_#847_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object002_Material_#847_0'].geometry}
                      material={materials.Material_847}
                    />
                    <mesh
                      name="Object002_Material_#695_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object002_Material_#695_0'].geometry}
                      material={materials.Material_695}
                    />
                    <mesh
                      name="Object002_Material_#803_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object002_Material_#803_0'].geometry}
                      material={materials.Material_803}
                    />
                    <mesh
                      name="Object002_Material_#804_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object002_Material_#804_0'].geometry}
                      material={materials.Material_804}
                    />
                    <mesh
                      name="Object002_Material_#805_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object002_Material_#805_0'].geometry}
                      material={materials.Material_805}
                    />
                  </group>
                </group>
                <group
                  name="rearseats"
                  position={[0.463, 32.172, -39.085]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={2.54}>
                  <group name="Object_274" position={[10.748, -4.885, -1.718]}>
                    <mesh
                      name="rearseats_Material_#849_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['rearseats_Material_#849_0'].geometry}
                      material={materials.Material_849}
                    />
                    <mesh
                      name="rearseats_Material_#847_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['rearseats_Material_#847_0'].geometry}
                      material={materials.Material_847}
                    />
                    <mesh
                      name="rearseats_Material_#706_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['rearseats_Material_#706_0'].geometry}
                      material={materials.Material_706}
                    />
                  </group>
                </group>
                <group
                  name="Plane003"
                  position={[0.082, 44.872, -55.239]}
                  scale={[3.297, 2.54, 2.54]}>
                  <mesh
                    name="Plane003_Material_#849_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Plane003_Material_#849_0'].geometry}
                    material={materials.Material_849}
                  />
                  <mesh
                    name="Plane003_Material_#706_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Plane003_Material_#706_0'].geometry}
                    material={materials.Material_706}
                  />
                </group>
                <group name="rear_seatbackrest" position={[21.319, 41.874, -55.283]} scale={2.54}>
                  <mesh
                    name="rear_seatbackrest_Material_#849_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['rear_seatbackrest_Material_#849_0'].geometry}
                    material={materials.Material_849}
                  />
                  <mesh
                    name="rear_seatbackrest_Material_#847_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['rear_seatbackrest_Material_#847_0'].geometry}
                    material={materials.Material_847}
                  />
                  <mesh
                    name="rear_seatbackrest_Material_#850_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['rear_seatbackrest_Material_#850_0'].geometry}
                    material={materials.Material_850}
                  />
                </group>
                <group
                  name="seatbelt"
                  position={[10.045, 27.839, -49.845]}
                  rotation={[-Math.PI / 2, 0.175, 0]}
                  scale={1.067}>
                  <mesh
                    name="seatbelt_Material_#706_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['seatbelt_Material_#706_0'].geometry}
                    material={materials.Material_706}
                  />
                  <mesh
                    name="seatbelt_Material_#805_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['seatbelt_Material_#805_0'].geometry}
                    material={materials.Material_805}
                  />
                  <mesh
                    name="seatbelt_Material_#697_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['seatbelt_Material_#697_0'].geometry}
                    material={materials.Material_697}
                  />
                </group>
                <group
                  name="interior_mirror"
                  position={[0.86, 66.81, 17.883]}
                  scale={[3.051, 2.79, 1.706]}>
                  <group name="Object_290" position={[0, 0.046, -2.319]}>
                    <mesh
                      name="interior_mirror_Material_#706_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['interior_mirror_Material_#706_0'].geometry}
                      material={materials.Material_706}
                    />
                    <mesh
                      name="interior_mirror_Material_#999_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['interior_mirror_Material_#999_0'].geometry}
                      material={materials.Material_999}
                    />
                  </group>
                </group>
                <group
                  name="Passenger_Door"
                  position={[-51.415, 36.364, 41.666]}
                  rotation={[0, 1.571, 0]}
                  scale={2.54}>
                  <group name="Object_294" position={[-16.685, -6.998, 0.449]}>
                    <mesh
                      name="Passenger_Door_Material_#692_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Passenger_Door_Material_#692_0'].geometry}
                      material={materials.Material_692}
                    />
                    <mesh
                      name="Passenger_Door_Material_#697_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Passenger_Door_Material_#697_0'].geometry}
                      material={materials.Material_697}
                    />
                    <mesh
                      name="Passenger_Door_Material_#694_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Passenger_Door_Material_#694_0'].geometry}
                      material={materials.Material_694}
                    />
                    <mesh
                      name="Passenger_Door_Material_#699_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Passenger_Door_Material_#699_0'].geometry}
                      material={materials.Material_699}
                    />
                    <mesh
                      name="Passenger_Door_Material_#698_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Passenger_Door_Material_#698_0'].geometry}
                      material={materials.Material_698}
                    />
                    <mesh
                      name="Passenger_Door_Material_#932_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Passenger_Door_Material_#932_0'].geometry}
                      material={materials.Material_932}
                    />
                    <mesh
                      name="Passenger_Door_Material_#706_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Passenger_Door_Material_#706_0'].geometry}
                      material={materials.Material_706}
                    />
                    <mesh
                      name="Passenger_Door_Material_#849_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Passenger_Door_Material_#849_0'].geometry}
                      material={materials.Material_849}
                    />
                    <mesh
                      name="Passenger_Door_Material_#695_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Passenger_Door_Material_#695_0'].geometry}
                      material={materials.Material_695}
                    />
                    <mesh
                      name="Passenger_Door_Material_#847_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Passenger_Door_Material_#847_0'].geometry}
                      material={materials.Material_847}
                    />
                    <mesh
                      name="Passenger_Door_Material_#1824_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Passenger_Door_Material_#1824_0'].geometry}
                      material={materials.Material_1824}
                    />
                  </group>
                </group>
                <group
                  name="sunvisors"
                  position={[20.143, 69.558, 11.615]}
                  rotation={[-1.484, 0, 0]}>
                  <mesh
                    name="sunvisors_Material_#1015_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['sunvisors_Material_#1015_0'].geometry}
                    material={materials.Material_1015}
                  />
                </group>
                <group
                  name="plds"
                  position={[11.093, 13.006, 43.214]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[1, 0.865, 1]}>
                  <mesh
                    name="plds_Material_#1014_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['plds_Material_#1014_0'].geometry}
                    material={materials.Material_1014}
                  />
                  <mesh
                    name="plds_Material_#1069_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['plds_Material_#1069_0'].geometry}
                    material={materials.Material_1069}
                  />
                  <mesh
                    name="plds_Material_#1046_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['plds_Material_#1046_0'].geometry}
                    material={materials.Material_1046}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/2021_bmw_m4_competition.glb')