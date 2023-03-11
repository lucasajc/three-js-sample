import { LineBasicMaterial } from "three";
import Line from "../shapes/line";

class LineBuilder {
  constructor() {
    this.points = [];
    this.color = 0xffffff;
    this.position = { x: 0, y: 0, z: 0 };
  }

  withPoints(points) {
    this.points = points;
    return this;
  }

  withColor(color) {
    this.color = color;
    return this;
  }

  withPosition(x, y, z) {
    this.position = { x, y, z };
    return this;
  }

  build() {
    const material = new LineBasicMaterial({ color: this.color });
    const line = new Line({ points: this.points, material });
    line.position.set(this.position.x, this.position.y, this.position.z);

    return line;
  }
}

export default LineBuilder;