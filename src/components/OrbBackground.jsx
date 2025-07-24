import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'

export default function OrbBackground() {
  return (
    <Canvas className="absolute inset-0 z-0">
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <Sphere args={[1.5, 64, 64]} scale={1.2}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.4}
          speed={2}
        />
      </Sphere>
      <OrbitControls enableZoom={false} enableRotate={false} />
    </Canvas>
  )
}
