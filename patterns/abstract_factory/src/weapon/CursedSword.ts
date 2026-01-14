import { Weapon } from "./IWeapon";

export class CursedSword implements Weapon {
   name = "Cursed Sword";

   use(): void {
      console.log(`${this.name} drains life!`);
   }
}