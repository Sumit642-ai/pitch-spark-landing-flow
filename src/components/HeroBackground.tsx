
import * as THREE from 'three';
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Dodecahedron } from '@react-three/drei';

const FloatingShapes = () => {
  const groupRef = useRef<THREE.Group>(null!);

  const shapes = useMemo(() => {
    const temp: { position: [number, number, number]; scale: number; type: 'ico' | 'dodeca' }[] = [];
    for (let i = 0; i < 40; i++) {
      const position: [number, number, number] = [
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
      ];
      const scale = 0.5 + Math.random() * 0.8;
      const type = Math.random() > 0.5 ? 'ico' : 'dodeca';
      temp.push({ position, scale, type });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Constant rotation
    groupRef.current.rotation.y += 0.0005;
    groupRef.current.rotation.x += 0.0002;
    
    // Mouse tracking for subtle interaction
    const { pointer } = state;
    groupRef.current.rotation.y += (pointer.x * 0.1 - groupRef.current.rotation.y) * 0.01;
    groupRef.current.rotation.x += (-pointer.y * 0.1 - groupRef.current.rotation.x) * 0.01;
  });

  const primaryColor = new THREE.Color().setHSL(158 / 360, 0.29, 0.45);
  const secondaryColor = new THREE.Color().setHSL(40 / 360, 0.25, 0.80);

  return (
    <group ref={groupRef}>
      {shapes.map(({ position, scale, type }, i) => (
        type === 'ico' ?
        <Icosahedron key={i} args={[1, 0]} position={position} scale={scale}>
          <meshStandardMaterial color={primaryColor} wireframe opacity={0.6} transparent />
        </Icosahedron>
        :
        <Dodecahedron key={i} args={[1, 0]} position={position} scale={scale}>
          <meshStandardMaterial color={secondaryColor} wireframe opacity={0.5} transparent />
        </Dodecahedron>
      ))}
    </group>
  );
};

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-70">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={1} />
        <pointLight position={[20, 20, 20]} intensity={0.5} />
        <FloatingShapes />
      </Canvas>
    </div>
  );
};

export default HeroBackground;
