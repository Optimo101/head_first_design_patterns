import { GumballMachine } from "../GumballMachine";
import { GumballMachineState } from "./IGumballMachineState";

export class NoQuarterState implements GumballMachineState {
   protected gumballMachine: GumballMachine;

   constructor(gumballMachine: GumballMachine) {
      this.gumballMachine = gumballMachine;
   }

   insertQuarter(): void {
      console.log("You inserted a quarter.")
      this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
   };

   ejectQuarter(): void {
      console.log("No quarter detected.")
   };

   turnCrank(): void {
      console.log("Unable to dispense gumball without quarter.")
   };

   dispense(): void {
      console.log("Unable to dispense gumball without quarter.")
   };
}