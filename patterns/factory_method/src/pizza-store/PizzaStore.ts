import { Pizza } from '../pizza/Pizza';

export abstract class PizzaStore {

   orderPizza(type: string): Pizza {
      let pizza: Pizza = this.createPizza(type);
      pizza.prepare();
      pizza.bake();
      pizza.cut();
      pizza.box();
      console.log(`Your ${pizza.name} is ready!`);
      console.log(); // new line
      return pizza;
   }

   protected abstract createPizza(type: string): Pizza;
}