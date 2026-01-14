import { MenuComponent } from "./MenuComponent";

export class MenuItem extends MenuComponent {
   private name: string;
   private description?: string;
   private vegetarian: boolean;
   private price: number;

   constructor(name: string, vegetarian: boolean, price: number, description?: string) {
      super();
      this.name = name;
      this.description = description;
      this.vegetarian = vegetarian;
      this.price = price;
   }

   getName(): string {
      return this.name;
   }

   getDescription(): string | undefined {
      return this.description;
   }

   getPrice(): number {
      return this.price;
   }

   isVegetarian(): boolean {
      return this.vegetarian;
   }

   print(): void {
      let vegetarianDish = this.isVegetarian() ? '(v)' : '';
      console.log(`${this.getName()} ${vegetarianDish}: ${this.getPrice()}`);
      if (this.getDescription()) {
         console.log(` - ${this.getDescription()}`);
      }
      console.log(); // new line
   }
}