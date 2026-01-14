import { FlyWithWings } from "../FlyBehavior/FlyWithWings";
import { Quack } from "../QuackBehavior/Quack";
import { Duck } from "./Duck";

export class MallardDuck extends Duck {
   constructor() {
      super();
      this.flyBehavior = new FlyWithWings;
      this.quackBehavior = new Quack;
   }

   display(): void {
      console.log("I am a Mallard duck.");
   }
}