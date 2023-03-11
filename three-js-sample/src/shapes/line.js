import { BufferGeometry, Line as THREELine } from "three";

class Line extends THREELine {
  constructor({ points = [], material }) {
    const geometry = new BufferGeometry().setFromPoints(points);
    super(geometry, material);
  }

  rotate({ x = 0, y = 0, z = 0 }) {
    this.rotation.x += x;
    this.rotation.y += y;
    this.rotation.z += z;
  }
}

export default Line;