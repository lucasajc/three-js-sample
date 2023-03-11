import { BoxGeometry, MeshStandardMaterial } from "three";
import Cube from "../shapes/cube";

class CubeBuilder {
  constructor() {
    this.receiveShadow = false;
    this.castShadow = false;
    this.position = { x: 0, y: 0, z: 0 };
    this.dimensions = { width: 1, height: 1, depth: 1 };
    this.material = new MeshStandardMaterial({
      color: 0xffffff,
      transparent: false,
      opacity: 1,
    });
  }

  withDimensions(width, height, depth) {
    this.dimensions = { width, height, depth };
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
    const geometry = new BoxGeometry(this.dimensions.width, this.dimensions.height, this.dimensions.depth);
    const cube = new Cube({ geometry, material: this.material });
    cube.receiveShadow = this.receiveShadow;
    cube.castShadow = this.castShadow;
    cube.position.set(this.position.x, this.position.y, this.position.z);

    return cube;
  }
}

export default CubeBuilder;