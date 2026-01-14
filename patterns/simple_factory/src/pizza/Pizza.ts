export abstract class Pizza {
   public name!: string;

   prepare(): void {
      console.log(`Preparing a ${this.name}.`)
   }

   bake(): void {
      console.log('Baking the pizza for 10 minutes at 425 degrees.')
   };

   cut(): void {
      console.log('Cutting the pizza into 8 slices.')
   };

   box(): void {
      console.log(`Boxing the pizza.`)
   };
}