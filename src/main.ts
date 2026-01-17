import * as THREE from "three";
import { inject } from "@vercel/analytics";

import { setupSceneCamera, setupRenderer } from "./core";
import { drawCube } from "./primitive";

inject();

const { scene, camera } = setupSceneCamera();

const renderer = setupRenderer();
document.body.appendChild(renderer.domElement);

const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = drawCube(material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
