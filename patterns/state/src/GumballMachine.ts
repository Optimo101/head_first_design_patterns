import { HasQuarterState } from "./gumball_machine_state/HasQuarterState";
import { GumballMachineState } from "./gumball_machine_state/IGumballMachineState";
import { NoQuarterState } from "./gumball_machine_state/NoQuarterState";
import { SoldOutState } from "./gumball_machine_state/SoldOutState";
import { SoldState } from "./gumball_machine_state/SoldState";
import { WinnerState } from "./gumball_machine_state/WinnerState";

export class GumballMachine {
   private soldOutState: GumballMachineState;
   private noQuarterState: GumballMachineState;
   private hasQuarterState: GumballMachineState;
   private soldState: GumballMachineState;
   private winnerState: GumballMachineState;

   private state: GumballMachineState;
   private count: number = 0;
   
   private manufacturer: string = 'Mighty Gumball, Inc.';
   private model: string = 'Standing Gumball Model no. 2004'

   constructor(numberGumballs: number) {
      this.soldOutState = new SoldOutState(this);
      this.noQuarterState = new NoQuarterState(this);
      this.hasQuarterState = new HasQuarterState(this);
      this.soldState = new SoldState(this);
      this.winnerState = new WinnerState(this);

      this.count = numberGumballs;
      this.state = numberGumballs > 0 ? this.noQuarterState : this.soldOutState;
   }

   insertQuarter(): void {
      this.state.insertQuarter();
   }

   ejectQuarter(): void {
      this.state.ejectQuarter();
   }

   turnCrank(): void {
      this.state.turnCrank();
      if (this.state === this.soldState || this.state === this.winnerState) {
         this.state.dispense();
      }
   }

   setState(state: GumballMachineState): void {
      this.state = state;
   }

   releaseBall(): void {
      if (this.count === 0) {
         console.log("There are no gumballs available to dispense.")
         return;
      }
   
      this.count--;
   }

   getCount(): number {
      return this.count;
   }

   printState(): void {
      console.log(this.manufacturer);
      console.log(this.model);
      console.log(`Inventory: ${this.count}`);

      let currentStateMsg: string;
      
      switch (this.state) {
         case this.soldOutState:
            currentStateMsg = 'Machine is sold out.';
            break;
         case this.noQuarterState:
            currentStateMsg = 'Machine is awaiting quarter.';
            break;
         case this.hasQuarterState:
            currentStateMsg = 'Quarter detected. Awaiting crank.';
            break;
         case this.soldState:
            currentStateMsg = 'Dispensing 1 gumball.';
            break;
         case this.winnerState:
            currentStateMsg = 'Winner determined. Dispensing 2 gumballs.';
            break;
         default:
            throw new Error(`Unknown state: ${this.state}`);
      }

      console.log(`State: ${currentStateMsg}`);
   }

   refill(numberGumballs: number): void {
      this.count += numberGumballs;
      console.log(`Added ${numberGumballs} to machine. Total gumballs: ${this.count}`);
   }


   getSoldOutState(): GumballMachineState {
      return this.soldOutState;
   }

   getNoQuarterState(): GumballMachineState {
      return this.noQuarterState;
   }

   getHasQuarterState(): GumballMachineState {
      return this.hasQuarterState;
   }

   getSoldState(): GumballMachineState {
      return this.soldState;
   }

   getWinnerState(): GumballMachineState {
      return this.winnerState;
   }

   
}