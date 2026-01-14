import { ChicagoPizzaStore } from "./pizza-store/ChicagoPizzaStore";
import { NYPizzaStore } from "./pizza-store/NYPizzaStore";
import { PizzaStore } from "./pizza-store/PizzaStore";
import { Pizza } from "./pizza/Pizza";

const nyStore: PizzaStore = new NYPizzaStore();
const chicagoStore: PizzaStore = new ChicagoPizzaStore();

let pizza: Pizza = nyStore.orderPizza('cheese');
pizza = chicagoStore.orderPizza('pepperoni');
