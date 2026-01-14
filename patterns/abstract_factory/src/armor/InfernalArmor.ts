import { Armor } from "./IArmor";

export class InfernalArmor implements Armor {
   name = "Infernal Armor";

   getDefense(): number {
      return 8;
   }
}