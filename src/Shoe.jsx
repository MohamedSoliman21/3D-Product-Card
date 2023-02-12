/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Shoe.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Shoe.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.67, -1.61, 3]} rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
        <group position={[-37.27, -6.54, 0.15]} rotation={[1.57, -0.02, 3.13]}>
          <group position={[-25.76, -1.15, 0]}>
            <mesh geometry={nodes.Outsole_1.geometry} material={materials['706a6a']} position={[-0.19, 3.95, -5.76]} rotation={[0, 0, -3.14]} scale={[-0.98, -0.89, -0.98]} />
            <mesh geometry={nodes.Plate.geometry} material={materials.Physical10} />
            <mesh geometry={nodes.Toe.geometry} material={nodes.Toe.material} />
            <mesh geometry={nodes._polySurface204.geometry} material={nodes._polySurface204.material} />
            <mesh geometry={nodes._polySurface205.geometry} material={materials.fef7f7} position={[40.76, 12.34, -22.15]} />
            <mesh geometry={nodes.Above.geometry} material={materials.Standard5} />
            <mesh geometry={nodes.Below.geometry} material={materials.b0b0b0} />
            <mesh geometry={nodes.Stripe.geometry} material={materials.Standard6} />
          </group>
          <group position={[-25.76, -1.15, 0]}>
            <group position={[-20.21, 47.7, -0.77]}>
              <mesh geometry={nodes.Tongue_2.geometry} material={materials.Physical9} position={[20.21, -48.47, 0.65]} />
              <mesh geometry={nodes.Tongue_Binding.geometry} material={materials.Physical12} position={[20.21, -48.47, 0.65]} />
              <mesh geometry={nodes.Tongue_Lining.geometry} material={materials.d3ebc} position={[20.21, -48.47, 0.65]} />
            </group>
            <mesh geometry={nodes.Binding.geometry} material={materials.Physical7} />
            <mesh geometry={nodes.Insole.geometry} material={materials.Physical15} />
            <mesh geometry={nodes.Lining.geometry} material={materials.Physical11} />
            <mesh geometry={nodes.Tag.geometry} material={materials.ffffff} position={[-15.88, 44.52, -24.34]} />
            <mesh geometry={nodes.Vamp.geometry} material={nodes.Vamp.material} />
            <mesh geometry={nodes.Plugs.geometry} material={materials.b0b0b0} />
            <mesh geometry={nodes.polySurface381.geometry} material={materials.b0b0b0} position={[9.17, 63.25, -14.78]} />
            <mesh geometry={nodes.polySurface382.geometry} material={materials.b0b0b0} position={[-9.44, 55.79, -14.22]} />
            <mesh geometry={nodes.polySurface383.geometry} material={materials.b0b0b0} position={[-18.66, 52.34, -13.55]} />
            <mesh geometry={nodes.polySurface384.geometry} material={materials.b0b0b0} position={[-27.95, 48.98, -12.7]} />
            <mesh geometry={nodes.polySurface385.geometry} material={materials.b0b0b0} position={[7.41, 65.1, 14.03]} />
            <mesh geometry={nodes.polySurface386.geometry} material={materials.b0b0b0} position={[-11.22, 58.21, 12.89]} />
            <mesh geometry={nodes.polySurface387.geometry} material={materials.b0b0b0} position={[-1.43, 61.81, 13.27]} />
            <mesh geometry={nodes.polySurface388.geometry} material={materials.b0b0b0} position={[-20.21, 54.94, 12.28]} />
            <mesh geometry={nodes.polySurface389.geometry} material={materials.b0b0b0} position={[-29.67, 51.27, 11.98]} />
            <mesh geometry={nodes.polySurface390.geometry} material={materials.b0b0b0} position={[-0.28, 59.54, -14.63]} />
            <mesh geometry={nodes.polySurface370.geometry} material={materials.b0b0b0} position={[109.3, 61.76, -0.46]} />
            <mesh geometry={nodes.polySurface392.geometry} material={materials.b0b0b0} position={[92.65, 44.44, -0.95]} />
            <mesh geometry={nodes.Lace_1_1.geometry} material={materials.b0b0b0} />
            <mesh geometry={nodes.Lace_2.geometry} material={materials.b0b0b0} />
            <mesh geometry={nodes.Lace_3.geometry} material={materials.b0b0b0} />
            <mesh geometry={nodes.Lace_4.geometry} material={materials.b0b0b0} />
            <mesh geometry={nodes.Lace_5.geometry} material={materials.b0b0b0} />
            <mesh geometry={nodes.Lace_6.geometry} material={materials.b0b0b0} />
            <mesh geometry={nodes.Lace_7.geometry} material={materials.b0b0b0} />
            <mesh geometry={nodes._polySurface207.geometry} material={materials.Physical2} />
            <mesh geometry={nodes.polySurface394.geometry} material={materials.Physical1} />
            <mesh geometry={nodes.pasted__stitch24.geometry} material={materials.b0b0b0} />
            <mesh geometry={nodes.pasted__stitch25.geometry} material={materials.b0b0b0} />
            <mesh geometry={nodes.pasted__stitch26.geometry} material={materials.b0b0b0} />
            <mesh geometry={nodes.pasted__stitch27.geometry} material={materials.b0b0b0} />
            <mesh geometry={nodes.stitch.geometry} material={materials.b0b0b0} />
            <mesh geometry={nodes.stitch10.geometry} material={materials.b0b0b0} />
            <mesh geometry={nodes.stitch11.geometry} material={materials.b0b0b0} />
            <mesh geometry={nodes.stitch14.geometry} material={materials.b0b0b0} />
            <mesh geometry={nodes.stitch15.geometry} material={materials.b0b0b0} />
            <mesh geometry={nodes.stitch16.geometry} material={materials.b0b0b0} position={[-21.2, 47.81, -1.23]} />
            <mesh geometry={nodes.stitch17.geometry} material={materials.b0b0b0} position={[0, -0.77, -0.12]} />
            <mesh geometry={nodes.stitch18.geometry} material={materials.b0b0b0} />
            <mesh geometry={nodes.stitch19.geometry} material={materials.b0b0b0} />
            <mesh geometry={nodes.stitch20.geometry} material={materials.b0b0b0} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Shoe.glb')