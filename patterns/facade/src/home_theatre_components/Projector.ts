import { StreamingPlayer } from "./StreamingPlayer";

export class Projector {
  private player?: StreamingPlayer;
  private mode: string = 'standard';

  on() {
    console.log(`${this.constructor.name} is ON`);
  }

  off() {
    console.log(`${this.constructor.name} is OFF`);
  }

  setPlayer(player: StreamingPlayer) {
    this.player = player;
  }

  wideScreenMode() {
    this.mode = 'widescreen';
    console.log(`${this.constructor.name} set to ${this.mode} mode.`)

  }
}