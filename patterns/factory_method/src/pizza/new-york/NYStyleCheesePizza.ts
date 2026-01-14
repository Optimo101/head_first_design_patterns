import { Pizza } from "../Pizza";

export class NYStyleCheesePizza extends Pizza {
   constructor() {
      super();
      this.name = "NY Style Cheese Pizza";
      this.dough = "Thin Crust Dough";
      this.sauce = "Marinara Sauce";
      this.toppings.push("Grated Reggiano Cheese");
   }
}