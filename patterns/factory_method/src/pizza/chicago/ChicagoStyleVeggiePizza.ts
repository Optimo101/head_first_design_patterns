import { Pizza } from "../Pizza";

export class ChicagoStyleVeggiePizza extends Pizza {
   constructor() {
      super();
      this.name = "Chicago Style Deep Dish Veggie Pizza";
      this.dough = "Extra Thick Crust Dough";
      this.sauce = "Plum Tomato Sauce";
      this.toppings.push("Shredded Mozzarella Cheese and veggies");
   }

   cut(): void {
      console.log("Cutting the pizza into square slices");
   }
}