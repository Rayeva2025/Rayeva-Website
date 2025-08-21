import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Earth(props) {
  const { nodes, materials } = useGLTF("/models/earth.glb");
  const earthRef = useRef();
  const [rotationSpeed] = useState(0.2);
  const [centeredGeometry, setCenteredGeometry] = useState(null);

  useEffect(() => {
    if (nodes.Object_2?.geometry) {
      const geometry = nodes.Object_2.geometry.clone();
      geometry.computeBoundingBox();
      const box = geometry.boundingBox;
      const center = new THREE.Vector3();
      box.getCenter(center);
      geometry.translate(-center.x, -center.y, -center.z);

      setCenteredGeometry(geometry);
    }
  }, [nodes]);

  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.z += delta * rotationSpeed;
      earthRef.current.rotation.y += delta *0.1* rotationSpeed;
      earthRef.current.rotation.x += delta *0.1* rotationSpeed;
    }
  });

  if (!centeredGeometry) {
    return null;
  }

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          ref={earthRef}
          castShadow
          receiveShadow
          geometry={centeredGeometry}
          material={materials.moon}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/earth.glb");
