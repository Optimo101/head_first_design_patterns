import { FlyBehavior } from "./FlyBehavior";

export class FlyWithRockets implements FlyBehavior {
   fly(): void {
      console.log('Flying with rocket power!')
   }
}