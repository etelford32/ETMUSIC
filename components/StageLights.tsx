'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function StageLights() {
  // Simulate kick drum BPM (120 BPM = 2 beats per second)
  const bpm = 120
  const kickInterval = 60 / bpm // seconds between kicks

  // Refs for lights
  const leftSpotRef = useRef<THREE.SpotLight>(null)
  const rightSpotRef = useRef<THREE.SpotLight>(null)
  const centerSpotRef = useRef<THREE.SpotLight>(null)
  const backLightRef = useRef<THREE.PointLight>(null)

  // Colors for the lights
  const colors = useMemo(() => ({
    neonBlue: new THREE.Color('#00f0ff'),
    neonPurple: new THREE.Color('#b000ff'),
    neonPink: new THREE.Color('#ff00e5'),
    white: new THREE.Color('#ffffff'),
  }), [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    // Simulate kick drum hits
    const kickPhase = (time % kickInterval) / kickInterval
    const kickIntensity = Math.max(0, 1 - kickPhase * 4) // Sharp attack, quick decay

    // Pulse all lights on kick
    if (leftSpotRef.current) {
      leftSpotRef.current.intensity = 5 + kickIntensity * 15
      leftSpotRef.current.color.copy(colors.neonBlue)
      leftSpotRef.current.position.x = -5 + Math.sin(time * 0.5) * 2
    }

    if (rightSpotRef.current) {
      rightSpotRef.current.intensity = 5 + kickIntensity * 15
      rightSpotRef.current.color.copy(colors.neonPink)
      rightSpotRef.current.position.x = 5 + Math.cos(time * 0.5) * 2
    }

    if (centerSpotRef.current) {
      centerSpotRef.current.intensity = 10 + kickIntensity * 30
      centerSpotRef.current.color.copy(colors.white)
    }

    // Back light slowly changes color
    if (backLightRef.current) {
      const colorPhase = (Math.sin(time * 0.3) + 1) / 2
      backLightRef.current.color.lerpColors(
        colors.neonBlue,
        colors.neonPurple,
        colorPhase
      )
      backLightRef.current.intensity = 2 + kickIntensity * 5
    }
  })

  return (
    <>
      {/* Left spotlight */}
      <spotLight
        ref={leftSpotRef}
        position={[-5, 8, 5]}
        angle={0.6}
        penumbra={0.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Right spotlight */}
      <spotLight
        ref={rightSpotRef}
        position={[5, 8, 5]}
        angle={0.6}
        penumbra={0.5}
        castShadow
      />

      {/* Center spotlight on projection screen */}
      <spotLight
        ref={centerSpotRef}
        position={[0, 10, 8]}
        target-position={[0, 2, -5]}
        angle={0.4}
        penumbra={0.3}
        castShadow
      />

      {/* Back atmospheric light */}
      <pointLight
        ref={backLightRef}
        position={[0, 5, -10]}
        distance={30}
      />

      {/* Additional colored point lights for atmosphere */}
      <pointLight position={[-8, 3, 0]} color="#00f0ff" intensity={2} distance={15} />
      <pointLight position={[8, 3, 0]} color="#ff00e5" intensity={2} distance={15} />
    </>
  )
}
