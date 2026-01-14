import { MenuComponent } from "./menu/MenuComponent";
import { Menu } from "./menu/Menu";
import { MenuItem } from "./menu/MenuItem";
import { Waitress } from "./Waitress";

const pancakeHouseMenu: MenuComponent = new Menu("Pancake House Menu", "Breakfast served all day!");
const dinerMenu: MenuComponent = new Menu("Diner Menu", "Lunch served after 10 AM.");

// add the primary menus to allMenus
const allMenus: MenuComponent = new Menu("MENU", "");
allMenus.add(pancakeHouseMenu);
allMenus.add(dinerMenu);

// add the breakfast items to the pancakeHouseMenu
pancakeHouseMenu.add(new MenuItem(
   "Blueberry Pancakes",
   true,
   3.49,
   "Pancakes made with fresh blueberries"
));
pancakeHouseMenu.add(new MenuItem(
   "Regular Pancake Breakfast",
   false,
   2.99,
   "Pancake with fried eggs, sausage"
));

// add the lunch items to the dinerMenu
dinerMenu.add(new MenuItem(
   "Vegetable Soup",  
   true, 
   1.99,
   "Hot cup of vegetable soup"
));
dinerMenu.add(new MenuItem(
   "Hotdog", 
   false, 
   3.99,
   "A hotdog, with sauerkraut, relish, and onions."
));
dinerMenu.add(new MenuItem(
   "BLT",
   false, 
   4.49,
   "Bacon, lettuce, and tomato on whole wheat"
));

// create the dessertMenu and add items
const dessertMenu: MenuComponent = new Menu("Dessert Menu", "Don't forget dessert!");
dessertMenu.add(new MenuItem(
   "Apple Pie",
   true,
   2.99,
   "Warm, flakey crust, topped with vanilla ice cream"
));
dessertMenu.add(new MenuItem(
   "Icecream",
   true,
   0.99,
   "Cold and creamy vanilla bean flavor"
))

// add the dessertMenu to the dinerMenu
dinerMenu.add(dessertMenu);

// once we've constructed our entire menu hierarchy, give the whole thing to the waitress to print
const waitress: Waitress = new Waitress(allMenus);
waitress.printMenu();

