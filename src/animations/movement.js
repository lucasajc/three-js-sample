import { MeshStandardMaterial, PerspectiveCamera, Scene, } from 'three';
import { renderer } from "../renderers/renderer-default";
import { LightBuilder, PlaneBuilder, SphereBuilder } from "../builders";
import CurvePath from "../paths/curve";

document.body.appendChild(renderer.domElement);

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000 );

const lightFirstSource = new LightBuilder().withPosition(0, 0, 500).withIntensity(0.75).build();
const lightSecondSource = new LightBuilder().withPosition(0, 0, 0).withIntensity(0.5).build();

const planeBack = new PlaneBuilder()
  .withDimensions(1000, 1000, 32, 32)
  .withMaterial(new MeshStandardMaterial({ opacity: 0.5, color: 0xffffff }))
  .withPosition(0, 0, -200)
  .withShadow()
  .build();
const planeLeft = new PlaneBuilder()
  .withDimensions(1000, 1000, 32, 32)
  .withMaterial(new MeshStandardMaterial({ opacity: 0.5, color: 0xffffff }))
  .withPosition(-500, 0, 0)
  .withRotation(0, 1.5708, 0)
  .withShadow()
  .build();
const planeRight = new PlaneBuilder()
  .withDimensions(1000, 1000, 32, 32)
  .withMaterial(new MeshStandardMaterial({ opacity: 0.5, color: 0xffffff }))
  .withPosition(500, 0, 0)
  .withRotation(0, -1.5708, 0)
  .withShadow()
  .build();
const planeTop = new PlaneBuilder()
  .withDimensions(1000, 1000, 32, 32)
  .withMaterial(new MeshStandardMaterial({ opacity: 0.5, color: 0xffffff }))
  .withPosition(0, 500, 0)
  .withRotation(1.5708)
  .withShadow()
  .build();
const planeBottom = new PlaneBuilder()
  .withDimensions(1000, 1000, 32, 32)
  .withMaterial(new MeshStandardMaterial({ opacity: 0.5, color: 0xffffff }))
  .withPosition(0, -500, 0)
  .withRotation(-1.5708)
  .withShadow()
  .build();

const sphere = new SphereBuilder().withRadius(50).withMaterial(new MeshStandardMaterial({ color: 0xff0000 })).build()

const curvePath = new CurvePath(lightSecondSource);
const curvePath2 = new CurvePath(sphere);

scene.add(planeBack);
scene.add(planeLeft);
scene.add(planeRight);
scene.add(planeTop);
scene.add(planeBottom);
// scene.add(lightFirstSource);
scene.add(lightSecondSource);
scene.add(sphere);


camera.position.set( 0, 0, 800 );
camera.lookAt( 0, 0, 0 );

function animate() {
  requestAnimationFrame(animate);

  curvePath.run();
  curvePath2.run();

  renderer.render( scene, camera );
}
animate();