'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

function ToyPlaneModel() {
  const gltf = useGLTF('/toy_plane.glb')
  return <primitive object={gltf.scene} scale={1.5} />
}

export default function PlaneCanvas() {
  return (
    <div className="h-[500px] bg-gray-200">
      <Canvas>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <ToyPlaneModel />
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  )
}
