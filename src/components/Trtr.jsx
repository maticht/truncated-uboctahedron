import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({...props}) {
    const group = useRef();
    const { nodes, materials } = useGLTF('/trtr.gltf')
    return (
        <group ref={group} dispose={null}>
            <group position={[0, 0, -0.01]} rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={0.34}>
                    <mesh geometry={nodes.Text002.geometry} material={materials['FrontColor.001']} scale={[1.51, 6.06, 1.79]} />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/trtr.gltf')


