import Plane from "../shapes/plane";
import { MeshStandardMaterial, PlaneGeometry } from "three";

class PlaneBuilder {
  constructor() {
    this.material = new MeshStandardMaterial({
      color: 0xffffff,
      transparent: false,
      opacity: 1,
    });
    this.receiveShadow = false;
    this.castShadow = false;
    this.position = { x: 0, y: 0, z: 0 };
    this.dimensions = { width: 1, height: 1, widthSegments: 1, heightSegments: 1 };
  }

  withDimensions(width, height, widthSegments, heightSegments) {
    this.dimensions = { width, height, widthSegments, heightSegments };
    return this;
  }

  withMaterial(material) {
    this.material = material;
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
    const { width, height, widthSegments, heightSegments } = this.dimensions;
    const geometry = new PlaneGeometry(width, height, widthSegments, heightSegments)
    const plane = new Plane({ geometry, material: this.material });
    plane.receiveShadow = this.receiveShadow;
    plane.castShadow = this.castShadow;
    plane.position.set(this.position.x, this.position.y, this.position.z);

    return plane;
  }
}

export default PlaneBuilder;