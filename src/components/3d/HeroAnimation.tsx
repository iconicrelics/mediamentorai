import React, { useRef, useState, useCallback } from 'react';
import { Canvas, useFrame, ThreeEvent } from '@react-three/fiber';
import { Mesh, Euler } from 'three';

const RotatingIcosahedron = () => {
  const meshRef = useRef<Mesh>(null!);
  const [isDragging, setIsDragging] = useState(false);
  const [previousMousePosition, setPreviousMousePosition] = useState<{ x: number; y: number } | null>(null);
  const [autoRotate, setAutoRotate] = useState(true);

  useFrame((state, delta) => {
    if (meshRef.current && autoRotate && !isDragging) {
      meshRef.current.rotation.x += delta * 0.1; // Slower auto-rotation
      meshRef.current.rotation.y += delta * 0.15; // Slower auto-rotation
    }
  });

  const handlePointerDown = useCallback((event: ThreeEvent<PointerEvent>) => {
    setIsDragging(true);
    setAutoRotate(false); // Stop auto-rotation on interaction
    setPreviousMousePosition({ x: event.clientX, y: event.clientY });
    (event.target as HTMLElement).setPointerCapture(event.pointerId); // Capture pointer
  }, []);

  const handlePointerUp = useCallback((event: ThreeEvent<PointerEvent>) => {
    setIsDragging(false);
    setPreviousMousePosition(null);
    (event.target as HTMLElement).releasePointerCapture(event.pointerId); // Release pointer
    // Optionally, resume auto-rotation after a delay or keep it off
    // setTimeout(() => setAutoRotate(true), 5000); 
  }, []);

  const handlePointerMove = useCallback((event: ThreeEvent<PointerEvent>) => {
    if (!isDragging || !previousMousePosition || !meshRef.current) return;

    const { clientX, clientY } = event;
    const deltaX = clientX - previousMousePosition.x;
    const deltaY = clientY - previousMousePosition.y;

    // Adjust rotation based on mouse movement
    // The sensitivity of rotation can be tuned by changing the divisor
    meshRef.current.rotation.y += deltaX * 0.01;
    meshRef.current.rotation.x += deltaY * 0.01;

    setPreviousMousePosition({ x: clientX, y: clientY });
  }, [isDragging, previousMousePosition]);
  
  const handlePointerOut = useCallback((event: ThreeEvent<PointerEvent>) => {
    // Optional: if you want dragging to stop if mouse leaves canvas
    // setIsDragging(false);
    // setPreviousMousePosition(null);
    // (event.target as HTMLElement).releasePointerCapture(event.pointerId);
  }, []);


  return (
    <mesh
      ref={meshRef}
      scale={2}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      onPointerOut={handlePointerOut} // Or onPointerLeave if preferred
    >
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={'#61DAFB'} wireframe />
    </mesh>
  );
};

const HeroAnimation = () => {
  return (
    <div style={{ height: '100vh', width: '100%', cursor: 'grab' }}>
      <Canvas camera={{ position: [0, 0, 5] }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <RotatingIcosahedron />
      </Canvas>
    </div>
  );
};

export default HeroAnimation;
