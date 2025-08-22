import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/puppy.glb");
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    names.forEach((name) => {
      actions[name].play();
    });
  }, [actions, names]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Rover_65">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.material0}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.material1}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials.material1_0}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <group name="Geometry_0">
                    <group name="Rover_66" />
                    <group name="Rover_Props_1">
                      <group name="Rover_travel_bag_67" />
                      <group name="Rover_footprint_68" />
                    </group>
                  </group>
                </group>
              </group>
              {/* <group
                name="Grass_lawn_69"
                position={[0, -0.148, -2.266]}
                scale={[629.877, 396.205, 396.205]}
              >
                <group name="RootNode0_62" scale={0.01}>
                  <group name="diorama_21_63">
                    <group name="node2_70">
                      <mesh
                        name="Object_79"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_79.geometry}
                        material={materials.material0_0}
                      />
                    </group>
                    <group name="node3_71">
                      <mesh
                        name="Object_81"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_81.geometry}
                        material={materials.material1_1}
                      />
                    </group>
                  </group>
                </group>
              </group> */}
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/puppy.glb");
