import Light from "../entities/light";

class LightBuilder {
  constructor() {
    this.color = 0xffffff;
    this.intensity = 1;
    this.distance = 100;
    this.decay = 0;
    this.position = { x: 0, y: 0, z: 0 };
  }

  withDecay(decay) {
    this.decay = decay;
    return this;
  }

  withDistance(distance) {
    this.distance = distance;
    return this;
  }

  withIntensity(intensity) {
    this.intensity = intensity;
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
    const light = new Light({
      color: this.color,
      intensity: this.intensity,
      distance: this.distance,
      decay: this.decay,
    });
    light.position.set(this.position.x, this.position.y, this.position.z);

    return light;
  }
}

export default LightBuilder;