import { MenuIterator } from "../iterators/IMenuIterator";
import { PancakeHouseMenuIterator } from "../iterators/PancakeHouseMenuIterator";
import { Menu } from "./IMenu";
import { MenuItem } from "./MenuItem";

export class PancakeHouseMenu implements Menu {
   private menuItems: MenuItem[];

   constructor() {
      this.menuItems = [];

      this.addItem("Regular Pancake Breakfast", "Pancake with fried eggs, sausage", false, 2.99);
      this.addItem("Blueberry Pancakes", "Pancakes made with fresh blueberries", true, 3.49);
   }

   addItem(name: string, description: string, isVegetarian: boolean, price: number) {
      const menuItem: MenuItem = new MenuItem(name, description, isVegetarian, price);
      this.menuItems.push(menuItem);
   }

   public getMenuItems(): MenuItem[] { // This method is no longer needed
      return this.menuItems;
   }

   createIterator(): MenuIterator<MenuItem> {
      return new PancakeHouseMenuIterator(this.menuItems);
   }
}