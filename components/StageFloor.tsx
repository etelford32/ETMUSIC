'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function StageFloor() {
  const floorRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (floorRef.current) {
      // Subtle pulsing of the floor
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.02
      floorRef.current.scale.set(1, 1, scale)
    }
  })

  return (
    <>
      {/* Main stage floor */}
      <mesh
        ref={floorRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2, 0]}
        receiveShadow
      >
        <planeGeometry args={[40, 40, 32, 32]} />
        <meshStandardMaterial
          color="#0a0a0f"
          metalness={0.9}
          roughness={0.1}
          emissive="#00f0ff"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Grid lines on floor */}
      <gridHelper
        args={[40, 40, '#00f0ff', '#1a1a2e']}
        position={[0, -1.99, 0]}
      />

      {/* Stage platform */}
      <mesh position={[0, -1, -5]} receiveShadow>
        <boxGeometry args={[12, 2, 6]} />
        <meshStandardMaterial
          color="#151520"
          metalness={0.8}
          roughness={0.2}
          emissive="#b000ff"
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* Stage edge lights */}
      {[-6, -4, -2, 0, 2, 4, 6].map((x, i) => (
        <mesh key={i} position={[x, 0, -2]}>
          <cylinderGeometry args={[0.1, 0.1, 0.5]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={2}
          />
        </mesh>
      ))}
    </>
  )
}
