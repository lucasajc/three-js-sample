import { MeshStandardMaterial, PerspectiveCamera, Scene, } from 'three';
import ParticleInsideSpherePath from "../paths/particleInsideSphere";
import { renderer } from "../renderers/renderer-default";
import { LightBuilder, PlaneBuilder, SphereBuilder } from "../builders";

document.body.appendChild(renderer.domElement);

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000 );

const lightFirstSource = new LightBuilder().withPosition(100, 100, 100).withIntensity(0.75).build();
const lightSecondSource = new LightBuilder().withPosition(-50, -50, 100).withIntensity(0.75).build();
const container = new SphereBuilder()
  .withRadius(60)
  .withMaterial(new MeshStandardMaterial({ opacity: 0.5, transparent: true, color: 0x0000ff }))
  .withShadow()
  .build();
const plane = new PlaneBuilder()
  .withDimensions(1000, 1000, 32, 32)
  .withMaterial(new MeshStandardMaterial({ opacity: 0.5, color: 0x111111 }))
  .withPosition(0, 0, -200)
  .withShadow()
  .build()
const spheres = [...Array(1000).keys()].map(() => new SphereBuilder().withRadius(0.5).build());

const paths = spheres.map((s) => new ParticleInsideSpherePath(s, container));

paths.forEach((p) => p.createInitialPath());

scene.add(lightFirstSource);
scene.add(lightSecondSource);
scene.add(plane);
scene.add(container);
spheres.forEach((s) => scene.add(s));

camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

function animate() {
  requestAnimationFrame(animate);

  container.rotate({ y: 0.001 });
  paths.forEach((p) => p.run());

  renderer.render( scene, camera );
}
animate();