import { Command } from "./ICommand";
import { Stereo } from "../Stereo";

export class StereoOnWithCDCommand implements Command {
   stereo: Stereo;

   constructor(stereo: Stereo) {
      this.stereo = stereo;
   }

   execute(): void {
      this.stereo.on();
      this.stereo.setCD();
      this.stereo.setVolume(11);
   }

   undo(): void {
      this.stereo.off();
   }
}