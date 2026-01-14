import { Enemy } from "./IEnemy";

export class Imp implements Enemy {
   name = "Imp";

   attack(): void {
      console.log("Imp hurls a firebolt!");
   }
}