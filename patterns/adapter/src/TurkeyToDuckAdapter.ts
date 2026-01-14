import { Duck } from "./duck/IDuck";
import { Turkey } from "./turkey/ITurkey";

export class TurkeyToDuckAdapter implements Duck {
   turkey: Turkey;

   constructor(turkey: Turkey) {
      this.turkey = turkey;
   }

   quack(): void {
      this.turkey.gobble();
   }

   fly(): void {
      for (let i = 0; i < 5; i++) {
         this.turkey.fly(); // turkey will fly 5 times to match a duck's flight
      }
   }
}