import { FlyBehavior } from "./FlyBehavior";

export class FlyWithWings implements FlyBehavior {
   fly(): void {
      console.log("The duck is flying with wings.")
   }
}