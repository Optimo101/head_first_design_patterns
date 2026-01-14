import { CaffeineBeverage } from "./CaffeineBeverage";

export class Tea extends CaffeineBeverage {
   beverageName = "Tea";

   brew(): void {
      console.log("Steeping the tea.");
   }

   override customerWantsCondiments(): boolean {
      console.log("Ask customer if they would like lemon added.");
      console.log("<The customer does want lemon>")
      return false;
   }
   addCondiments(): void {
      console.log("Adding lemon.");
   }
}