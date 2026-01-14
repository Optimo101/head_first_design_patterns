import { Pizza } from "./Pizza";

export class PepperoniPizza extends Pizza {
   constructor() {
      super();
      this.name = 'Pepperoni Pizza';
   }

   bake() {
      console.log('Baking the pizza for 12 minutes at 400 degrees.');
   }
}