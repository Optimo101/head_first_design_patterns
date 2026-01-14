import { GumballMachine } from "./GumballMachine";

// create gumball machine and load with 10 gumballs
const gumballMachine: GumballMachine = new GumballMachine(10);
// print initial state of machine
gumballMachine.printState();

// try turning the crank without a quarter
gumballMachine.turnCrank();

// try inserting 2 quarters at once
gumballMachine.insertQuarter();
gumballMachine.insertQuarter();

// turn the crank with a quarter
gumballMachine.turnCrank();

// print state of machine
gumballMachine.printState();

// let's get some more gumballs!
while (gumballMachine.getCount() > 0) {
   gumballMachine.insertQuarter();
   gumballMachine.turnCrank();
}

gumballMachine.printState();