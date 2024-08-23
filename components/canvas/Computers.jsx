"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  const meshRef = useRef();
  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={0.15} groundColor="white" />

      <spotLight
        position={[-10, 20, 10]}
        angle={0.3}
        penumbra={10}
        intensity={40}
        castShadow
        shadow-mapSize={1024}
        color="#FF007F"
      />

      <spotLight
        position={[10, 20, 10]}
        angle={0.3}
        penumbra={10}
        intensity={40}
        shadow-mapSize={1024}
        color="#00FFFF"
      />

      <spotLight
        position={[-15, 15, 5]}
        angle={0.3}
        penumbra={10}
        intensity={40}
        shadow-mapSize={1024}
        color="#39FF14"
      />

      <spotLight
        position={[15, 15, -5]}
        angle={0.3}
        penumbra={10}
        intensity={40}
        shadow-mapSize={1024}
        color="#FFFF33"
      />

      <pointLight intensity={40} />

      <primitive
        object={computer.scene}
        dispose={null}
        scale={isMobile ? [0.5, 0.5, 0.5] : [0.7, 0.7, 0.7]}
        position={isMobile ? [0, -2.5, 0] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={0}
          enablePan={true}
          enableRotate={true}
          autoRotate={true}
          target={[0, 0, 0]}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
