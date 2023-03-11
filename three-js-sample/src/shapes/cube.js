import { EdgesGeometry, LineBasicMaterial, LineSegments, Mesh } from "three";

class Cube extends Mesh {
  constructor({ geometry, material }) {
    super(geometry, material);
  }

  rotate({ x = 0, y = 0, z = 0 }) {
    this.rotation.x += x;
    this.rotation.y += y;
    this.rotation.z += z;
  }

  getEdges() {
    return new EdgesGeometry(this.geometry);
  }

  getLineSegments() {
    return new LineSegments(this.getEdges(), new LineBasicMaterial( { color: 0xffffff } ) );
  }
}

export default Cube;