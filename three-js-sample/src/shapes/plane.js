import { Mesh } from "three";

class Plane extends Mesh {
  constructor({ geometry, material }) {
    super(geometry, material);
  }
}

export default Plane;