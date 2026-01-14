import { PizzaStore } from "./PizzaStore";
import { Pizza } from "../pizza/Pizza";
import { ChicagoStyleCheesePizza } from "../pizza/chicago/ChicagoStyleCheesePizza";
import { ChicagoStyleVeggiePizza } from "../pizza/chicago/ChicagoStyleVeggiePizza";
import { ChicagoStyleClamPizza } from "../pizza/chicago/ChicagoStyleClamPizza";
import { ChicagoStylePepperoniPizza } from "../pizza/chicago/ChicagoStylePepperoniPizza";

export class ChicagoPizzaStore extends PizzaStore {
   createPizza(item: string): Pizza {
      switch(item) {
         case 'cheese':
            return new ChicagoStyleCheesePizza();
         case 'veggie':
            return new ChicagoStyleVeggiePizza();
         case 'clam':
            return new ChicagoStyleClamPizza();
         case 'pepperoni':
            return new ChicagoStylePepperoniPizza();
         default:
            throw new Error(`Unknown pizza type: ${item}`);
      }
   }
}