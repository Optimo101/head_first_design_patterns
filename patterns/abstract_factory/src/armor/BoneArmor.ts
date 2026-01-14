import { Armor } from "./IArmor";

export class BoneArmor implements Armor {
   name = "Bone Armor";

   getDefense(): number {
      return 5;
   }
}