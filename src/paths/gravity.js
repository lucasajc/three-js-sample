import { generateRandomDensityNumber } from "../positioning/randomDensity";
import { r } from "../utils/numbers";


class GravityPath {
  speed;

  constructor({
    particleCenter,
    particleOrbit,
    speed = 0.01,
    maxOrbitRadius = 800,
    gravity = 1
  }) {
    this.particleCenter = particleCenter;
    this.particleOrbit = particleOrbit;
    this.speed = speed;
    this.maxOrbitRadius = maxOrbitRadius;
    this.gravity = gravity;

    this.radius = r(this.particleOrbit.position.x, this.particleOrbit.position.z);
    this.delta = Math.asin(this.particleOrbit.position.x / this.radius);
    this.direction = this.particleOrbit.position.z >= 0 ? -1 : 1;
  }

  run() {
    const particleCenterRadius = this.particleCenter.geometry.type = "SphereGeometry"
      ? this.particleCenter.geometry.parameters.radius
      : 1;
    if (Math.abs(this.radius) > particleCenterRadius) {
      this.radius = this.radius - this.gravity;
    } else {
      this.radius = generateRandomDensityNumber({
        min: particleCenterRadius,
        max: this.maxOrbitRadius * 3
      });
    }
    this.delta += this.speed;

    const x = this.particleCenter.position.x + Math.sin(this.delta) * this.radius * this.direction;
    const y = this.particleCenter.position.y;
    const z = this.particleCenter.position.z + Math.cos(this.delta) * this.radius * this.direction;

    this.particleOrbit.position.set(x, y, z);
  }
}

export default GravityPath;