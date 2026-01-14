import { Light } from "../Light";
import { Command } from "./ICommand";

export class LightOffCommand implements Command {
   light: Light;

   constructor(light: Light) {
      this.light = light;
   }

   execute(): void {
      this.light.off();
   }

   undo(): void {
      this.light.on();
   }
}