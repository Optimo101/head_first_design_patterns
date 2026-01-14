import { DinerMenu } from "./menus/DinerMenu";
import { MenuItem } from "./menus/MenuItem";
import { PancakeHouseMenu } from "./menus/PancakeHouseMenu";
import { Waitress } from "./Waitress";

const pancakeHouseMenu: PancakeHouseMenu = new PancakeHouseMenu();
const dinerMenu: DinerMenu = new DinerMenu();

// Without Iterator Pattern
// ========================
   // The example below shows how the client is exposed to the objects internal structure: an array in one menue and a simple object in another.
const breakfastItems: MenuItem[] = pancakeHouseMenu.getMenuItems();
const lunchItems: Record<string, MenuItem> = dinerMenu.getMenuItems();

console.log('=== Breakfast Menu ===');
for (let item of breakfastItems) {
   console.log(`${item.getName()}: ${item.getPrice()}`);
   console.log(`- ${item.getDescription()}`);
   console.log(); // new line
}

console.log('=== Lunch Menu ===');
for (let item of Object.values(lunchItems)) {
   console.log(`${item.getName()}: ${item.getPrice()}`);
   console.log(`- ${item.getDescription()}`);
   console.log(); // new line
}

// Iterator Pattern
// ================
   // Simplifies the client's life by providing a way to access the elements of an aggregate object sequentially without exposing its underlying representation.
   // The iterator encapsulates the traversal logic.
   // Client doesn't know/care if it's an array, simple object, a tree, a linked list, complex collection, etc..
const waitress: Waitress = new Waitress(pancakeHouseMenu, dinerMenu);
waitress.printMenu();