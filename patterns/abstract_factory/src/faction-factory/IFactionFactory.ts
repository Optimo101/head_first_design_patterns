import { Armor } from "../armor/IArmor";
import { Enemy } from "../enemy/IEnemy";
import { Weapon } from "../weapon/IWeapon";

// Abstract Factory is simply a group of Factory Methods that belong together. The Abstract factory creates a matched set of related objects.
export interface FactionFactory {
   createEnemy(): Enemy;
   createWeapon(): Weapon;
   createArmor(): Armor;
}