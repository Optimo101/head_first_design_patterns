import { FlyNoWay } from "../FlyBehavior/FlyNoWay";
import { Squeak } from "../QuackBehavior/Squeak";
import { Duck } from "./Duck";

export class RubberDuck extends Duck {
   constructor() {
      super();
      this.flyBehavior = new FlyNoWay;
      this.quackBehavior = new Squeak;
   }

   display(): void {
      console.log("I am a Rubber duck.")
   }
}