'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment } from '@react-three/drei'
import { Suspense, useRef, useEffect } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

function ToyPlaneModel() {
  const gltf = useGLTF('/toy_plane.glb')
  const ref = useRef<THREE.Group>(null)

  // 🟢 Animate with gsap
  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current.scale,
        { x: 0, y: 0, z: 0 },
        { x: 1.5, y: 1.5, z: 1.5, duration: 1.5, ease: 'bounce.out' }
      )

      gsap.fromTo(
        ref.current.position,
        { y: -5 },
        { y: -1, duration: 1.5, ease: 'power2.out' }
      )
    }
  }, [])

  // 🌀 Rotate the model
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005
    }
  })

  return <primitive ref={ref} object={gltf.scene} position={[0, -1, 0]} />
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
