import { Pizza } from "./pizza/Pizza";
import { SimplePizzaFactory } from "./SimplePizzaFactory";

export class PizzaStore {
   constructor(protected factory: SimplePizzaFactory) {}

   public orderPizza(type: string): Pizza {
      let pizza = this.factory.createPizza(type);
      pizza.prepare();
      pizza.bake();
      pizza.cut();
      pizza.box();
      console.log(`Your ${pizza.name} is ready!`);
      console.log(); // new line

      return pizza;
   }
}