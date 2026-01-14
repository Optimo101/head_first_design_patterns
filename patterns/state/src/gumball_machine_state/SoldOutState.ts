import { GumballMachine } from "../GumballMachine";
import { GumballMachineState } from "./IGumballMachineState";

export class SoldOutState implements GumballMachineState {
   protected gumballMachine: GumballMachine;
   
   constructor(gumballMachine: GumballMachine) {
      this.gumballMachine = gumballMachine;
   }

   insertQuarter(): void {
      console.log("Quarter rejected. Machine is out of gumballs. Come back later.")
   };

   ejectQuarter(): void {
      console.log("No quarter detected.")
   };

   turnCrank(): void {
      console.log("No quarter detected. Machine is out of gumballs.")
   };

   dispense(): void {
      console.log("No quarter detected. Machine is out of gumballs.")
   };
}