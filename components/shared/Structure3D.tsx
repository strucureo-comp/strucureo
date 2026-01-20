'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const Geometries = () => {
  const count = 20;
  const meshRef = useRef<THREE.InstancedMesh>(null);

  // Gyro / Mobile Device Orientation state
  const deviceOrientation = useRef({ alpha: 0, beta: 0, gamma: 0 });

  React.useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      // iOS sometimes returns null values
      if (event.beta === null || event.gamma === null) return;

      deviceOrientation.current = {
        alpha: event.alpha || 0,
        beta: event.beta,
        gamma: event.gamma,
      };
    };

    // Just listen. Permission is handled by MobileOptimizer globally.
    // We add it here to ensure this component catches it if it's already firing.
    window.addEventListener('deviceorientation', handleOrientation, true);

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Gyro Input (Mobile)
    // Gamma: Left/Right tilt (-90 to 90). Restricted to -45/45.
    // Beta: Front/Back tilt (-180 to 180). Restricted to -45/45.
    const gyroX = Math.min(Math.max(deviceOrientation.current.gamma, -45), 45) / 10; // Boost sensitivity
    const gyroY = Math.min(Math.max(deviceOrientation.current.beta - 45, -45), 45) / 10;

    // Mouse Input (Desktop)
    // state.pointer is -1 to 1
    const mouseX = state.pointer.x * 2;
    const mouseY = state.pointer.y * 2;

    // Additive Blend: Ensures smooth transition or combined use
    const targetX = (mouseX + gyroX) * 30;
    const targetY = (mouseY + gyroY) * 30;

    particles.forEach((particle, i) => {
      let { factor, speed, xFactor, yFactor, zFactor } = particle;
      // update t
      particle.t += speed / 2;
      const t = particle.t;

      // Update mouse influence with lerp
      particle.mx += (targetX - particle.mx) * 0.05;
      particle.my += (targetY - particle.my) * 0.05;

      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.setScalar(s * 1.5 + 2);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      meshRef.current?.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color="#111111" wireframe transparent opacity={0.1} />
    </instancedMesh>
  );
};

export const Structure3D = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 80], fov: 75 }}>
        <fog attach="fog" args={['#ffffff', 50, 150]} />
        <ambientLight intensity={0.5} />
        <Geometries />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          {/* Center Object */}
          <mesh position={[20, 0, -20]} rotation={[0, 0, 0]}>
            <boxGeometry args={[15, 15, 15]} />
            <meshStandardMaterial color="#eeeeee" wireframe transparent opacity={0.15} />
          </mesh>
        </Float>
      </Canvas>
      {/* Soft gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
    </div>
  );
};
