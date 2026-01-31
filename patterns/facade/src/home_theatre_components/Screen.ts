export class Screen {
  up() {
    console.log(`The ${this.constructor.name} goes up`)
  }

  down() {
    console.log(`The ${this.constructor.name} goes down`)
  }
}