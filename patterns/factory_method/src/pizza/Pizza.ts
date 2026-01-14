export abstract class Pizza {
   public name!: string;
   protected dough!: string;
   protected sauce!: string;
   protected toppings: string[] = [];

   prepare(): void {
      console.log(`Preparing ${this.name}`);
      console.log(`Tossing ${this.dough}...`);
      console.log(`Adding ${this.sauce}...`);
      console.log(`Adding toppings: `);
      for (let topping of this.toppings) {
         console.log(`- ${topping}`);
      }
   }

   bake(): void {
      console.log(`Baking for 25 minutes at 425 degrees.`);
   }

   cut(): void {
      console.log(`Cutting the pizza into diagonal slices.`)
   }

   box(): void {
      console.log(`Placing pizza in offical PizzaStore box.`);
   }
}