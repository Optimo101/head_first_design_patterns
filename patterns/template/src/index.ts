import { CaffeineBeverage } from "./CaffeineBeverage";
import { Coffee } from "./Coffee";
import { Tea } from "./Tea";

const coffee: CaffeineBeverage = new Coffee();
const tea: CaffeineBeverage = new Tea();

coffee.prepareRecipe();
tea.prepareRecipe();