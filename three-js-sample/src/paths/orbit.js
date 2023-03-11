import { r } from "../utils/numbers";

class OrbitPath {
  speed;

  constructor(particleCenter, particleOrbit, speed = 0.01) {
    this.particleCenter = particleCenter;
    this.particleOrbit = particleOrbit;
    this.speed = speed;
    this.radius = r(this.particleOrbit.position.x, this.particleOrbit.position.z);
    this.delta = Math.asin(this.particleOrbit.position.x / this.radius);
  }

  run() {
    this.delta += this.speed;
    const x = this.particleCenter.position.x + Math.sin(this.delta + this.speed) * this.radius;
    const y = this.particleCenter.position.y + this.particleOrbit.position.y;
    const z = this.particleCenter.position.z + Math.cos(this.delta + this.speed) * this.radius;

    this.particleOrbit.position.set(x, y, z);
  }
}

export default OrbitPath;