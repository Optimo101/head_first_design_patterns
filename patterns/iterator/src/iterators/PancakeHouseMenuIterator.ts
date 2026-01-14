import { MenuItem } from "../menus/MenuItem";
import { MenuIterator } from "./IMenuIterator";

export class PancakeHouseMenuIterator implements MenuIterator<MenuItem> {
   private items: MenuItem[];
   private position: number = 0;

   constructor (items: MenuItem[]) {
      this.items = items;
   }

   next(): MenuItem {
      const menuItem = this.items[this.position];
      this.position++;
      return menuItem;
   }

   hasNext(): boolean {
      if (this.position >= this.items.length || this.items[this.position] == null) {
         return false;
      }

      return true;
   }
}