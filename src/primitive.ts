import * as THREE from "three";

const geometry = new THREE.BoxGeometry(1, 1, 1);

export const drawCube = (material: THREE.MeshBasicMaterial) => {
  const cube = new THREE.Mesh(geometry, material);
  return cube;
};
