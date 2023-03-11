import { MeshStandardMaterial, PerspectiveCamera, Scene, } from 'three';
import { renderer } from "../renderers/renderer-default";
import { LightBuilder, PlaneBuilder, SphereBuilder } from "../builders";
import GravityPath from "../paths/gravity";
import { generateRandomDensityPosition } from "../positioning/randomDensity";

function generateParticles(numberOfParticles) {
  return [...Array(numberOfParticles).keys()]
    .map(() => {
      const position = generateRandomDensityPosition({
        particleCenter: blackHole,
        min: -2400,
        max: 2400
      });
      return new SphereBuilder()
        .withRadius(0.25)
        .withPosition(position.x, position.y, position.z)
        .build()
    });
}

function generatePaths(particleCenter, particles, gravity) {
  let speed = 0.01;
  return particles.map((particle) => {
    speed += 0.000001;
    return new GravityPath({
      particleCenter: particleCenter,
      particleOrbit: particle,
      speed,
      maxOrbitRadius: 800,
      gravity
    });
  });
}

document.body.appendChild(renderer.domElement);

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000 );

const lightFirstSource = new LightBuilder().withPosition(0, -75, 0).withIntensity(0.75).build();
const secondFirstSource = new LightBuilder().withPosition(0, 20, 55).withIntensity(0.3).build();
// const lightFirstSource = new LightBuilder().withPosition(0, 500, 250).withIntensity(0.75).build();
// const lightFirstSource = new LightBuilder().withPosition( 0, -350, -250).withIntensity(5).build();

const planeBottom = new PlaneBuilder()
  .withDimensions(1000, 1000, 32, 32)
  .withMaterial(new MeshStandardMaterial({ opacity: 0.5, color: 0x000000 }))
  .withPosition(0, 0, 0)
  .withRotation(-1.5708)
  .withShadow()
  .build();

const blackHole = new SphereBuilder()
  .withRadius(50)
  .withMaterial(new MeshStandardMaterial({ color: 0x000000 }))
  .withPosition(0, 0, 0)
  .build();

const gravityParticles = generateParticles(10000);
const paths = generatePaths(blackHole, gravityParticles, 1.25);

scene.add(planeBottom);
scene.add(lightFirstSource);
scene.add(secondFirstSource);
scene.add(blackHole);
gravityParticles.forEach((particle) => scene.add(particle));

camera.position.set( 0, 150, 150);
camera.lookAt( 0, 0, 0 );

function animate() {
  requestAnimationFrame(animate);

  paths.forEach((p) => p.run());

  renderer.render( scene, camera );
}
animate();