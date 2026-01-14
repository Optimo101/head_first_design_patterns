import { Enemy } from "./IEnemy";

export class Skeleton implements Enemy {
   name = "Skeleton";

   attack(): void {
      console.log("Skeleton slashes with brittle bones!");
   }
}