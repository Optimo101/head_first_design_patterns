import { Duck } from "./duck/IDuck";
import { Turkey } from "./turkey/ITurkey";
import { MallardDuck } from "./duck/MallardDuck";
import { TurkeyToDuckAdapter } from "./TurkeyToDuckAdapter";
import { WildTurkey } from "./turkey/WildTurkey";

const duck: Duck = new MallardDuck();
const turkey: Turkey = new WildTurkey();

const turkeyAdapter: TurkeyToDuckAdapter = new TurkeyToDuckAdapter(turkey); // wrap the turkey object with the adapter

console.log("The Turkey says...")
turkey.gobble();
turkey.fly();

console.log("The Duck says...")
testDuck(duck);

console.log("The TurkeyToDuckAdapter says...")
testDuck(turkeyAdapter); // the testDuck function accepts our turkeyAdapter as an argument because it satisfies the Duck interface

function testDuck(duck: Duck) {
   duck.quack();
   duck.fly();
}