'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

function ToyPlaneModel() {
  const gltf = useGLTF('/toy_plane.glb')
  const ref = useRef<THREE.Group>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005 // continuous rotation
    }
  })

  return <primitive ref={ref} object={gltf.scene} scale={1.5} position={[0, -1, 0]} />
}

export default function PlaneCanvas() {
  return (
    <div className="h-screen bg-gradient-to-b from-sky-100 to-indigo-100">
      <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 3, 3]} intensity={1.5} />
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <ToyPlaneModel />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  )
}
