import Sphere from "../shapes/sphere";
import { MeshStandardMaterial, SphereGeometry } from "three";

class SphereBuilder {
  constructor() {
    this.material = new MeshStandardMaterial({
      color: 0xffffff,
      transparent: false,
      opacity: 1,
    });
    this.receiveShadow = false;
    this.castShadow = false;
    this.position = { x: 0, y: 0, z: 0 };
  }

  withMaterial(material) {
    this.material = material;
    return this;
  }

  withRadius(radius) {
    this.geometry = new SphereGeometry(radius);
    return this;
  }

  withShadow() {
    this.receiveShadow = true;
    this.castShadow = true;
    return this;
  }

  withPosition(x, y, z) {
    this.position = { x, y, z };
    return this;
  }

  build() {
    const sphere = new Sphere({ geometry: this.geometry, material: this.material });
    sphere.receiveShadow = this.receiveShadow;
    sphere.castShadow = this.castShadow;
    sphere.position.set(this.position.x, this.position.y, this.position.z);

    return sphere;
  }
}

export default SphereBuilder;