import { Weapon } from "./IWeapon";

export class HellfireDagger implements Weapon {
   name = "Hellfire Dagger";

   use(): void {
      console.log(`${this.name} burns the soul!`);
   }
}