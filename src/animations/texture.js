import {
  PerspectiveCamera, PointLight,
  Scene, TextureLoader, MeshStandardMaterial
} from 'three';
import { renderer } from "../renderers/renderer-default";
import SphereBuilder from "../builders/sphere.builder";

document.body.appendChild(renderer.domElement);

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000 );

// const texture = new TextureLoader().load( "textures/metal/alien/Metal_Alien_001_COLOR.jpg" );
// const textureDisplacement = new TextureLoader().load("textures/metal/alien/Metal_Alien_001_DISP.png");
// const textureNormal = new TextureLoader().load("textures/metal/alien/Metal_Alien_001_NRM.jpg");
// const textureSpecular = new TextureLoader().load("textures/metal/alien/Metal_Alien_001_SPEC.jpg");
// const textureAo = new TextureLoader().load("textures/metal/alien/Metal_Alien_001_AO.jpg");

// const texture = new TextureLoader().load( "textures/lava/Lava_001_COLOR.png" );
// const textureDisplacement = new TextureLoader().load("textures/lava/Lava_001_DISP.png");
// const textureNormal = new TextureLoader().load("textures/lava/Lava_001_NRM.png");

const texture = new TextureLoader().load( "textures/lapis-lazuli/Lapis_Lazuli_001_COLOR.jpg" );
const textureDisplacement = new TextureLoader().load("textures/lapis-lazuli/Lapis_Lazuli_001_DISP.png");
const textureNormal = new TextureLoader().load("textures/lapis-lazuli/Lapis_Lazuli_001_NORM.jpg");
const textureRoughness = new TextureLoader().load("textures/lapis-lazuli/Lapis_Lazuli_001_ROUGH.jpg");

// const textureSpecular = new TextureLoader().load("textures/planets/earth-specular.tif");
// const textureNormal = new TextureLoader().load("textures/planets/earth-normal.tif");
// const textureLight = new TextureLoader().load("textures/planets/earth.jpg");
// const textureDark = new TextureLoader().load("textures/planets/earth-night.jpg");


const sphere = new SphereBuilder()
  .withRadius(60)
  .withMaterial(new MeshStandardMaterial({
    map: texture,
    normalMap: textureNormal,
    displacementMap: textureDisplacement,
    roughnessMap: textureRoughness,
    roughness: 1,
  }))
  .build();

sphere.castShadow = true;
sphere.receiveShadow = true;

const light = new PointLight( 0xffffff, 2, 100, 0 );
light.position.set( 200, 0, 200 );

camera.position.set( 0, 0, 125 );
camera.lookAt( 0, 0, 0 );

scene.add(light);
scene.add(sphere);

function animate() {
  requestAnimationFrame(animate);

  sphere.rotate({ y: 0.001 });

  renderer.render( scene, camera );
}
animate();