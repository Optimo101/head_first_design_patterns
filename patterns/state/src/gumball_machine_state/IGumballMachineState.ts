export interface GumballMachineState {
   insertQuarter(): void;
   ejectQuarter(): void;
   turnCrank(): void;
   dispense(): void;
}