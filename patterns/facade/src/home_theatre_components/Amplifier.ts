import { Tuner } from "./Tuner";
import { StreamingPlayer } from "./StreamingPlayer";

export class Amplifier {
  private tuner?: Tuner; 
  private player?: StreamingPlayer;
  private soundMode: string = 'stereo sound';
  private soundLevel: number = 0;

  on() {
    console.log(`${this.constructor.name} is ON`);
  }

  off() {
    console.log(`${this.constructor.name} is OFF`);
  }

  setTuner(tuner: Tuner) {
    this.tuner = tuner;
  }

  setStreamingPlayer(player: StreamingPlayer) {
    this.player = player;
  }

  setSurroundSound() {
    this.soundMode = 'surround sound';
    console.log(`${this.constructor.name} ${this.soundMode} on.`)
  }

  setVolume(level: number) {
    this.soundLevel = level;
    console.log(`${this.constructor.name} volume set to: ${this.soundLevel}`)
  }
}