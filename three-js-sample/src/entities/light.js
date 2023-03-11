import { PointLight } from "three";

class Light extends PointLight {
  constructor({ color, intensity, distance, decay }) {
    super(color, intensity, distance, decay);
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

export default Light;