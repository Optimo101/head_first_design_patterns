import { MallardDuck } from "./Duck/MallardDuck";
import { RedheadDuck } from "./Duck/RedheadDuck";
import { RubberDuck } from "./Duck/RubberDuck";
import { FlyWithRockets } from "./FlyBehavior/FlyWithRockets";

const myMallard = new MallardDuck();
const myRedhead = new RedheadDuck();
const myRubberDuck = new RubberDuck();

myMallard.display();
myMallard.swim();
myMallard.performQuack();
myMallard.performFly();


myRedhead.display();
myRedhead.swim();
myRedhead.performQuack();
myRedhead.performFly();

myRubberDuck.display();
myRubberDuck.swim();
myRubberDuck.performQuack();
myRubberDuck.performFly();

myRubberDuck.setFlyBehavior(new FlyWithRockets);
myRubberDuck.performFly();
