import { PizzaStore } from "./PizzaStore";
import { Pizza } from "../pizza/Pizza";
import { NYStyleCheesePizza } from "../pizza/new-york/NYStyleCheesePizza";
import { NYStyleVeggiePizza } from "../pizza/new-york/NYStyleVeggiePizza";
import { NYStyleClamPizza } from "../pizza/new-york/NYStyleClamPizza";
import { NYStylePepperoniPizza } from "../pizza/new-york/NYStylePepperoniPizza";

export class NYPizzaStore extends PizzaStore {
   createPizza(item: string): Pizza {
      switch(item) {
         case 'cheese':
            return new NYStyleCheesePizza();
         case 'veggie':
            return new NYStyleVeggiePizza();
         case 'clam':
            return new NYStyleClamPizza();
         case 'pepperoni':
            return new NYStylePepperoniPizza();
         default:
            throw new Error(`Unknown pizza type: ${item}`);
      }
   }
}