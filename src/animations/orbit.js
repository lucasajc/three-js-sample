import { MeshStandardMaterial, PerspectiveCamera, Scene, } from 'three';
import { renderer } from "../renderers/renderer-default";
import { LightBuilder, SphereBuilder } from "../builders";
import OrbitPath from "../paths/orbit";

document.body.appendChild(renderer.domElement);

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000 );

const lightFirstSource = new LightBuilder().withPosition(100, 100, 100).withIntensity(0.75).build();
const lightSecondSource = new LightBuilder().withPosition(-50, -50, 100).withIntensity(0.75).build();
const container = new SphereBuilder()
  .withRadius(100)
  .withMaterial(new MeshStandardMaterial({ color: 0x000000 }))
  .withShadow()
  .build();

let positionX = -50;
let speed = 0.01;
const orbitParticles =
  [...Array(1000).keys()]
  .map(() => {
    positionX = positionX - 1;
    return new SphereBuilder().withRadius(1).withPosition(positionX, 0, 0).build()
  });
const paths = orbitParticles.map((particle) => {
  speed = speed + 0.0001;
  return new OrbitPath(container, particle, speed);
});

scene.add(lightFirstSource);
scene.add(lightSecondSource);
scene.add(container);
orbitParticles.forEach((particle) => scene.add(particle));

camera.position.set( 0, 150, 300 );
camera.lookAt( 0, 0, 0 );

function animate() {
  requestAnimationFrame(animate);

  paths.forEach((p) => p.run());

  renderer.render( scene, camera );
}
animate();