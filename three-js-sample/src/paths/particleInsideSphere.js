import { r } from "../utils/numbers";

const getRandomArbitrary = (minimum, maximum) => {
  return Math.random() * (maximum - minimum) + minimum;
}

class ParticleInsideSpherePath {
  speed;

  constructor(particle, sphere) {
    this.particle = particle;
    this.sphere = sphere;
    this.speed = { x: 0, y: 0, z: 0 };
  }

  createInitialPath() {
    this.speed.x = getRandomArbitrary(-0.1, 0.1);
    this.speed.y = getRandomArbitrary(-0.1, 0.1);
    this.speed.z = getRandomArbitrary(-0.1, 0.1);
  }

  run() {
    const radius = r(this.particle.position.x, this.particle.position.y, this.particle.position.z);
    if (radius >= (this.sphere.geometry.parameters.radius - this.particle.geometry.parameters.radius * 2)) {
      this.speed.x = -this.speed.x;
      this.speed.y = -this.speed.y;
      this.speed.z = -this.speed.z;
    }
    this.particle.move({ x: this.speed.x, y: this.speed.y, z: this.speed.z });
  }
}

export default ParticleInsideSpherePath;