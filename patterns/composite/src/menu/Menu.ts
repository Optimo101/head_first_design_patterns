import { MenuComponent } from "./MenuComponent";

export class Menu extends MenuComponent {
   private menuComponents!: MenuComponent[];
   private name: string;
   private description?: string;

   constructor(name: string, description?: string) {
      super();
      this.menuComponents = [];
      this.name = name;
      this.description = description;
   }

   override add(menuComponent: MenuComponent): void {
      this.menuComponents.push(menuComponent);
   }

   remove(menuComponent: MenuComponent): void {
      this.menuComponents = this.menuComponents.filter(component => component !== menuComponent);
   }

   getChild(i: number): MenuComponent {
      return this.menuComponents[i];
   }

   getName(): string {
      return this.name;
   }

   getDescription(): string | undefined {
      return this.description;
   }

   override print(): void {
      console.log(`=== ${this.getName()} ===`);
      if (this.getDescription()) {
         console.log(` - ${this.getDescription()}`);
      }
      console.log('---------------------');

      for (let menuComponent of this.menuComponents) {
         menuComponent.print();
      }
   }
}