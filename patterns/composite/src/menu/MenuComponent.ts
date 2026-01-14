export abstract class MenuComponent {
   add(menuComponent: MenuComponent): void {
      throw new Error("Unsupported operation");
   }

   remove(menuComponent: MenuComponent): void {
      throw new Error("Unsupported operation");
   }

   getChild(i: number): MenuComponent {
      throw new Error("Unsupported operation");
   }

   getName(): string {
      throw new Error("Unsupported operation");
   }

   getDescription(): string | undefined {
      throw new Error("Unsupported operation");
   }

   getPrice(): number {
      throw new Error("Unsupported operation");
   }

   isVegetarian(): boolean {
      throw new Error("Unsupported operation");
   }

   print(): void {
      throw new Error("Unsupported operation");
   }
}