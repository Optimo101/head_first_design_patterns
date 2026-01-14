import { Turkey } from "./ITurkey";

export class WildTurkey implements Turkey {
   gobble(): void {
      console.log("Gobble gobble!");
   }

   fly(): void {
      console.log("I'm flying a short distance."); // Turkey's can't fly far
   }
}