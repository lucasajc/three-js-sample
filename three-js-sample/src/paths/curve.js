
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

class CurvePath {
  speed;
  d;

  constructor(particle) {
    this.particle = particle;
    this.speed = 0.05;
    this.d = 0;
  }

  run() {
    this.d += 0.01;
    const x = Math.cos(this.d) * 400;
    const y = Math.sin(this.d) * Math.cos(this.d) * 300;
    const z = this.particle.position.z;

    this.particle.position.set(x, y, z);
    // console.log(this.particle.material.color.getHex())
    // if (this.particle.material.color.getHex() === 0xffffff) {
    //   this.value = -0x010100
    // } else if (this.particle.material.color.getHex() === 0x000000) {
    //   this.value = 0x010100
    // }
    // this.particle.material.color.setHex(this.particle.material.color.getHex() + this.value);
  }
}

export default CurvePath;