import { Amplifier } from "./Amplifier";

export class StreamingPlayer {
  private amplifier?: Amplifier;
  private media?: string|null;

  on() {
    console.log(`${this.constructor.name} is ON`);
  }

  off() {
    console.log(`${this.constructor.name} is OFF`);
  }

  setAmplifier(amplifier: Amplifier) {
    this.amplifier = amplifier;
  }

  play(movie: string) {
    this.media = movie;
    console.log(`Playing "${this.media}"`);
  }

  stop() {
    console.log(`Stopped "${this.media}"`);
  }
}