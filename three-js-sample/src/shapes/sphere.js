import { Mesh } from "three";

class Sphere extends Mesh {
  constructor({ geometry, material }) {
    super(geometry, material);
  }

  rotate({ x = 0, y = 0, z = 0 }) {
    this.rotation.x += x;
    this.rotation.y += y;
    this.rotation.z += z;
  }

  move({ x = 0, y = 0, z = 0 }) {
    const nextX = this.position.x += x;
    const nextY = this.position.y += y;
    const nextZ = this.position.z += z;
    this.position.set(nextX, nextY, nextZ);
  }
}

export default Sphere;