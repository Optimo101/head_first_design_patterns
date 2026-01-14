import { GumballMachine } from "../GumballMachine";
import { GumballMachineState } from "./IGumballMachineState";

export class HasQuarterState implements GumballMachineState {
   protected gumballMachine: GumballMachine;
   protected static readonly WINNER_ODDS: number = 0.10;

   constructor(gumballMachine: GumballMachine) {
      this.gumballMachine = gumballMachine;
   }
   
   insertQuarter(): void {
      console.log("Another quarter cannot be inserted at this time.");
   };

   ejectQuarter(): void {
      console.log("Quarter returned.");
      this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
   };

   turnCrank(): void {
      console.log("You turned the crank...");
      const isWinner = this.isWinner();
      if (isWinner && this.gumballMachine.getCount() > 1) {
         this.gumballMachine.setState(this.gumballMachine.getWinnerState());
      } else {
         this.gumballMachine.setState(this.gumballMachine.getSoldState());
      }
   };

   dispense(): void {
      console.log("A gumball cannot be dispensed at this time.");
   };

   isWinner(): boolean {
      return Math.random() < HasQuarterState.WINNER_ODDS;
   }
}