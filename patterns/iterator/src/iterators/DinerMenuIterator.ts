import { MenuItem } from "../menus/MenuItem";
import { MenuIterator } from "./IMenuIterator";

export class DinerMenuIterator implements MenuIterator<MenuItem> {
   private items: MenuItem[];
   private position: number = 0;

   constructor (items: Record<string, MenuItem>) {
      this.items = Object.values(items);
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