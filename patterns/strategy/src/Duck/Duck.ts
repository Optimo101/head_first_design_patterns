import { FlyBehavior } from "../FlyBehavior/FlyBehavior";
import { QuackBehavior } from "../QuackBehavior/QuackBehavior";

export abstract class Duck {
   protected flyBehavior!: FlyBehavior;
   protected quackBehavior!: QuackBehavior;

   abstract display(): void

   performQuack(): void {
      this.quackBehavior.quack();
   }

   performFly(): void {
      this.flyBehavior.fly();
   }

   swim(): void {
      console.log("The duck swims.");
   }

   setQuackBehavior(qb: QuackBehavior) {
      this.quackBehavior = qb;
   }

   setFlyBehavior(fb: FlyBehavior) {
      this.flyBehavior = fb;
   }
}

