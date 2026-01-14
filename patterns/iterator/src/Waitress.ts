import { MenuIterator } from "./iterators/IMenuIterator";
import { Menu } from "./menus/IMenu";
import { MenuItem } from "./menus/MenuItem";

export class Waitress {
   private pancakeHouseMenu: Menu;
   private dinerMenu: Menu;

   constructor(pancakeHouseMenu: Menu, dinerMenu: Menu) {
      this.pancakeHouseMenu = pancakeHouseMenu;
      this.dinerMenu = dinerMenu;
   }

   printMenu(): void {
      const pancakeIterator: MenuIterator<MenuItem> = this.pancakeHouseMenu.createIterator();
      const dinerIterator: MenuIterator<MenuItem> = this.dinerMenu.createIterator();

      console.log('=== Breakfast Menu ===');
      this.printMenuItems(pancakeIterator);
      console.log('=== Lunch Menu ===');
      this.printMenuItems(dinerIterator);
   }

   printMenuItems(iterator: MenuIterator<MenuItem>): void {
      while (iterator.hasNext()) {
         const menuItem: MenuItem = iterator.next();
         console.log(`${menuItem.getName()}: ${menuItem.getPrice()}`);
         console.log(`- ${menuItem.getDescription()}`);
         console.log(); // new line
      }
   }
}