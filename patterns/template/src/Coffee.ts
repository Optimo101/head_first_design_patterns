import { CaffeineBeverage } from "./CaffeineBeverage";

export class Coffee extends CaffeineBeverage {
   beverageName = "Coffee";
   
   brew(): void {
      console.log("Dripping coffee through filter.");
   }

   addCondiments(): void {
      console.log("Adding sugar and milk.");
   }
}