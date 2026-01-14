import { Armor } from "../armor/IArmor";
import { InfernalArmor } from "../armor/InfernalArmor";
import { Enemy } from "../enemy/IEnemy";
import { Imp } from "../enemy/Imp";
import { HellfireDagger } from "../weapon/HellfireDagger";
import { Weapon } from "../weapon/IWeapon";
import { FactionFactory } from "./IFactionFactory";

export class DemonicFactory implements FactionFactory {
   createEnemy(): Enemy {
      return new Imp();
   }

   createWeapon(): Weapon {
      return new HellfireDagger();
   }

   createArmor(): Armor {
      return new InfernalArmor();
   }
}