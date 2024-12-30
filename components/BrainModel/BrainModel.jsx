// components/BrainModel/BrainModel.jsx

import React, { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

function BrainModel() {
  const { scene } = useGLTF('/brain.glb');
  const [rotation, setRotation] = useState(0);

  useFrame(() => {
    setRotation(prev => prev + 0.01);
    scene.rotation.y = rotation;
  });

  return <primitive object={scene} scale={2} position={[0, -1, 0]} />;
}

export default BrainModel;
