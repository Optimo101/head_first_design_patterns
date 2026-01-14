import { Command } from "./ICommand";

export class NoCommand implements Command {
   execute(): void {
      // do nothing
   }

   undo(): void {
      // undo nothing
   }
}