import { MeshStandardMaterial, PerspectiveCamera, Scene, } from 'three';
import Point from "../shapes/point";
import { renderer } from "../renderers/renderer-default";
import { CubeBuilder, LightBuilder, LineBuilder, SphereBuilder } from "../builders";

document.body.appendChild(renderer.domElement);

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000 );

const light = new LightBuilder().withPosition(0, 0, 100).withIntensity(1).build();
const container = new SphereBuilder()
  .withRadius(60)
  .withMaterial(new MeshStandardMaterial({ opacity: 0.5, transparent: true, color: 0x0000ff }))
  .build();
const cube = new CubeBuilder()
  .withDimensions(10, 10, 10)
  .withMaterial(new MeshStandardMaterial({ color: 0xff0000 }))
  .build();
const sphere = new SphereBuilder().withRadius(0.5).build();
const line = new LineBuilder()
  .withColor(0xff0000)
  .withPoints([
    new Point({ x: -10, y: 0, z: 0 }),
    new Point({ x: 0, y: 10, z: 0 }),
    new Point({ x: 10, y: 0, z: 0 }),
    new Point({ x: 0, y: -10, z: 0 }),
    new Point({ x: -10, y: 0, z: 0 })
  ])
  .build();

scene.add(container);
scene.add(cube);
scene.add(sphere);
scene.add(line);
scene.add(light);

camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

function animate() {
  requestAnimationFrame(animate);

  container.rotate({ y: 0.001 });
  cube.rotate({ x: 0.02, y: 0.01 });
  line.rotate({ x: 0.02 });
  sphere.rotate({ x: 0.02, y: 0.01 });

  renderer.render( scene, camera );
}
animate();