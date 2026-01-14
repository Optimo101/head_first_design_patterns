import { FactionFactory } from "./faction-factory/IFactionFactory";

export class EnemyLoadout {
   factory: FactionFactory;

   constructor(factory: FactionFactory) {
      this.factory = factory;
   }

   createEnemyWithGear() {
      const enemy = this.factory.createEnemy();
      const weapon = this.factory.createWeapon();
      const armor = this.factory.createArmor();

      console.log(
         `A ${enemy.name} appears wielding a ${weapon.name} and equipped with ${armor.name}!`
      );

      enemy.attack();
      weapon.use();
   }
}