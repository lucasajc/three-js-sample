import { Vector3 } from "three";

class Point extends Vector3 {
  constructor({ x, y, z }) {
    super(x, y, z);
  }
}

export default Point;