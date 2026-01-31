export class PopcornPopper {
  on() {
    console.log(`${this.constructor.name} is ON`);
  }

  off() {
    console.log(`${this.constructor.name} is OFF`);
  }

  pop() {
    console.log(`${this.constructor.name} popping popcorn!`)
  }
}