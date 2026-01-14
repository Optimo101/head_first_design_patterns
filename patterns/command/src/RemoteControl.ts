import { Command } from "./commands/ICommand";
import { NoCommand } from "./commands/NoCommand";

export class RemoteControl {
   onCommands: Command[];
   offCommands: Command[];
   undoCommand: Command;

   constructor(){
      this.onCommands = [];
      this.offCommands = [];

      // initialize 7 on/off buttons with NoCommand
      const noCommand: Command = new NoCommand();
      for (let i = 0; i < 7; i++) {
         this.onCommands[i] = noCommand;
         this.offCommands[i] = noCommand;
      }

      this.undoCommand = noCommand;
   }

   setCommand(slot: number, onCommand: Command, offCommand: Command): void {
      this.onCommands[slot] = onCommand;
      this.offCommands[slot] = offCommand;
   }

   onButtonPushed(slot: number): void {
      this.onCommands[slot].execute();
      this.undoCommand = this.onCommands[slot];
   }

   offButtonPushed(slot: number): void {
      this.offCommands[slot].execute();
      this.undoCommand = this.offCommands[slot];
   }
   
   // the 'undo' button reverses the previous command
   undoButtonPushed() {
      this.undoCommand.undo();
   }
}