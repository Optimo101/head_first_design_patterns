import { PizzaStore } from "./PizzaStore";
import { SimplePizzaFactory } from "./SimplePizzaFactory";

const simpleFactory = new SimplePizzaFactory();
const store = new PizzaStore(simpleFactory);
store.orderPizza('cheese');
store.orderPizza('pepperoni')
