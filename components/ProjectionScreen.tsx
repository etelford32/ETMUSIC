'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Text } from '@react-three/drei'

export default function ProjectionScreen() {
  const screenRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.MeshStandardMaterial>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    // Simulate kick drum for screen pulse
    const bpm = 120
    const kickInterval = 60 / bpm
    const kickPhase = (time % kickInterval) / kickInterval
    const kickIntensity = Math.max(0, 1 - kickPhase * 4)

    // Pulse the screen on kick
    if (screenRef.current) {
      const scale = 1 + kickIntensity * 0.1
      screenRef.current.scale.set(scale, scale, 1)
    }

    // Animate emissive intensity
    if (materialRef.current) {
      materialRef.current.emissiveIntensity = 0.5 + kickIntensity * 1.5

      // Slowly shift colors
      const colorPhase = (Math.sin(time * 0.5) + 1) / 2
      materialRef.current.emissive.setHSL(colorPhase * 0.3 + 0.5, 1, 0.5)
    }
  })

  return (
    <group position={[0, 3, -8]}>
      {/* Main projection screen */}
      <mesh ref={screenRef} castShadow>
        <planeGeometry args={[8, 4.5]} />
        <meshStandardMaterial
          ref={materialRef}
          color="#ffffff"
          emissive="#00f0ff"
          emissiveIntensity={0.5}
          metalness={0.1}
          roughness={0.7}
        />
      </mesh>

      {/* Screen frame */}
      <mesh position={[0, 0, -0.1]}>
        <boxGeometry args={[8.5, 5, 0.2]} />
        <meshStandardMaterial
          color="#0a0a0f"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* LED border lights */}
      {[
        [-4.25, 2.5, 0.05], [4.25, 2.5, 0.05],
        [-4.25, -2.5, 0.05], [4.25, -2.5, 0.05]
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <sphereGeometry args={[0.15]} />
          <meshStandardMaterial
            color="#ff00e5"
            emissive="#ff00e5"
            emissiveIntensity={3}
          />
        </mesh>
      ))}

      {/* Floating text on screen */}
      <Text
        position={[0, 0, 0.01]}
        fontSize={0.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#00f0ff"
      >
        the E.T.
      </Text>

      <Text
        position={[0, -0.8, 0.01]}
        fontSize={0.2}
        color="#cccccc"
        anchorX="center"
        anchorY="middle"
      >
        Live in the Metaverse
      </Text>
    </group>
  )
}
