import { CheesePizza } from "./pizza/CheesePizza";
import { ClamPizza } from "./pizza/ClamPizza";
import { PepperoniPizza } from "./pizza/PepperoniPizza";
import { Pizza } from "./pizza/Pizza";
import { VeggiePizza } from "./pizza/VeggiePizza";

export class SimplePizzaFactory {
   createPizza(type: string): Pizza {
      switch(type) {
         case 'cheese':
            return new CheesePizza();
         case 'veggie':
            return new VeggiePizza();
         case 'clam':
            return new ClamPizza();
         case 'pepperoni':
            return new PepperoniPizza();
         default:
            throw new Error(`Invalid pizza type: ${type}`);
      }
   }
}