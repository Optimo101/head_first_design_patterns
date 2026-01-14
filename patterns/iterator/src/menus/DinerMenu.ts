import { DinerMenuIterator } from "../iterators/DinerMenuIterator";
import { MenuIterator } from "../iterators/IMenuIterator";
import { Menu } from "./IMenu";
import { MenuItem } from "./MenuItem";

export class DinerMenu implements Menu {
   private menuItems: Record<string, MenuItem>;

   constructor() {
      this.menuItems = {};

      this.addItem("Vegetable Soup", "Hot cup of vegetable soup", true, 1.99);
      this.addItem("Hotdog", "A hotdog, with sauerkraut, relish, and onions.", false, 3.99);
      this.addItem("BLT","Bacon, lettuce, and tomato on whole wheat", false, 4.49);
   }

   addItem(name: string, description: string, isVegetarian: boolean, price: number) {
      const menuItem: MenuItem = new MenuItem(name, description, isVegetarian, price);
      this.menuItems[name] = menuItem;
   }

   public getMenuItems(): Record<string, MenuItem> { // This method is no longer needed
      return this.menuItems;
   }

   createIterator(): MenuIterator<MenuItem> {
      return new DinerMenuIterator(this.menuItems);
   }
}