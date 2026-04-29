'use client';

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const Geometries = () => {
  const count = 10;
  const meshRef = useRef<THREE.InstancedMesh>(null);

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

    // Scroll influence
    const scrollSpeed = typeof window !== 'undefined' ? Math.min(Math.abs(window.scrollY - (window as any).lastY || 0) / 10, 5) : 0;
    if (typeof window !== 'undefined') (window as any).lastY = window.scrollY;

    // Mouse Input (Desktop)
    const mouseX = state.pointer.x * 2;
    const mouseY = state.pointer.y * 2;

    const targetX = mouseX * 30;
    const targetY = mouseY * 30;

    particles.forEach((particle, i) => {
      let { factor, speed, xFactor, yFactor, zFactor } = particle;
      // update t with scroll speed influence
      particle.t += (speed + scrollSpeed * 0.01) / 2;
      const t = particle.t;

      // Update mouse influence with lerp
      particle.mx += (targetX - particle.mx) * 0.05;
      particle.my += (targetY - particle.my) * 0.05;

      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      // Scroll speed spreads particles out more (increase x/y/z factors temporarily)
      const spread = 1 + scrollSpeed * 0.2;

      dummy.position.set(
        (particle.mx / 10) * a + xFactor * spread + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor * spread + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor * spread + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
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
  const [shouldRenderCanvas, setShouldRenderCanvas] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const coarsePointer = window.matchMedia('(pointer: coarse)');

    const updateCanvasState = () => {
      setShouldRenderCanvas(!reducedMotion.matches && !coarsePointer.matches);
    };

    updateCanvasState();
    reducedMotion.addEventListener('change', updateCanvasState);
    coarsePointer.addEventListener('change', updateCanvasState);

    return () => {
      reducedMotion.removeEventListener('change', updateCanvasState);
      coarsePointer.removeEventListener('change', updateCanvasState);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 opacity-60">
      {shouldRenderCanvas ? (
        <Canvas
          camera={{ position: [0, 0, 80], fov: 75 }}
          dpr={[1, 1.25]}
          gl={{ antialias: false, powerPreference: 'low-power' }}
        >
          <fog attach="fog" args={['#ffffff', 50, 150]} />
          <ambientLight intensity={0.5} />
          <Geometries />
          <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.25}>
            <mesh position={[20, 0, -20]} rotation={[0, 0, 0]}>
              <boxGeometry args={[15, 15, 15]} />
              <meshStandardMaterial color="#eeeeee" wireframe transparent opacity={0.12} />
            </mesh>
          </Float>
        </Canvas>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(17,17,17,0.08),transparent_35%),radial-gradient(circle_at_25%_65%,rgba(17,17,17,0.05),transparent_30%)]" />
      )}
      {/* Soft gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
    </div>
  );
};
