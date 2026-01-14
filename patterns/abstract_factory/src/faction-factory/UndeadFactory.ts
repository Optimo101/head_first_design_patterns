import { BoneArmor } from "../armor/BoneArmor";
import { Armor } from "../armor/IArmor";
import { Enemy } from "../enemy/IEnemy";
import { Skeleton } from "../enemy/Skeleton";
import { CursedSword } from "../weapon/CursedSword";
import { Weapon } from "../weapon/IWeapon";
import { FactionFactory } from "./IFactionFactory";

export class UndeadFactory implements FactionFactory {
   createEnemy(): Enemy {
      return new Skeleton();
   }

   createWeapon(): Weapon {
      return new CursedSword();
   }

   createArmor(): Armor {
      return new BoneArmor();
   }
}