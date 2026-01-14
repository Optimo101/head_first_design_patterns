import { GumballMachine } from "../GumballMachine";
import { GumballMachineState } from "./IGumballMachineState";

export class WinnerState implements GumballMachineState {
   protected gumballMachine: GumballMachine;
   
   constructor(gumballMachine: GumballMachine) {
      this.gumballMachine = gumballMachine;
   }

   insertQuarter(): void {
      console.log("Please wait, we are currently dispensing a gumball.")
   };

   ejectQuarter(): void {
      console.log("Quarter cannot be returned after crank has been turned.")
   };

   turnCrank(): void {
      console.log("Turning the rank twice doesn't get you another gumball.")
   };

   dispense(): void {
      this.gumballMachine.releaseBall();
      this.gumballMachine.releaseBall();
      console.log("You're a WINNER! Two gumballs are dispensed and come rolling out.")

      if (this.gumballMachine.getCount() > 0) {
         this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
      } else {
         console.log("The machine is out of gumballs.");
         this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
      }
   };
}