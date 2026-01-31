export class TheatreLights {
  on() {
    console.log(`${this.constructor.name} is ON`);
  }

  off() {
    console.log(`${this.constructor.name} is OFF`);
  }

  dim(level: number) {
    console.log(`${this.constructor.name} dimming to level: ${level}`)
  }
}