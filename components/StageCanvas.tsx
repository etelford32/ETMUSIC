'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import StageLights from './StageLights'
import StageFloor from './StageFloor'
import ProjectionScreen from './ProjectionScreen'

export default function StageCanvas() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        shadows
        className="bg-transparent"
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          {/* Camera */}
          <PerspectiveCamera makeDefault position={[0, 5, 15]} fov={60} />

          {/* Ambient light for base visibility */}
          <ambientLight intensity={0.1} />

          {/* Fog for atmosphere */}
          <fog attach="fog" args={['#0a0a0f', 10, 50]} />

          {/* Stage Components */}
          <StageLights />
          <ProjectionScreen />
          <StageFloor />

          {/* Controls - can be disabled later */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
