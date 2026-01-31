import { Amplifier } from "./Amplifier";

export class Tuner {
  private amplifier?: Amplifier

  on() {
    console.log(`${this.constructor.name} is ON`)
  }

  off() {
    console.log(`${this.constructor.name} is OFF`);
  }

  setAmp(amplifier: Amplifier) {
    this.amplifier = amplifier;
  }
}