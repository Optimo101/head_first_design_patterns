export abstract class CaffeineBeverage {
   public abstract beverageName: string;

   // prepareRecipe() is our template method because it serves as a template for an algorithm. In the template, each step of the algorithm is represented by a method.
   public prepareRecipe(): void {
      this.boilWater();
      this.brew();
      this.hook();
      this.pourInCup();
      if (this.customerWantsCondiments()) {
         this.addCondiments();
      }
      
      this.serve();
   }
   
   // Some methods (steps) are handled by the abstract superclass...
   protected boilWater(): void {
      console.log('Heat water to a boil.');
   }

   // while others are delegated to the subclasses.
   protected abstract brew(): void;

   // A "hook" method allows subclasses to "hook" into the algorithm and add their own implementation if they wish. Hooks can have default implementation/behavior or be left empty.
   protected hook(): void {};

   protected pourInCup(): void {
      console.log('Pour beverage in cup.');
   }

   // Another "hook" example. This could be overriden by a subclass to prompt the customer to choose, or be left to it's default implementation which will always add condiments.
   protected customerWantsCondiments(): boolean {
      return true;
   }

   protected abstract addCondiments(): void;

   protected serve(): void {
      console.log(`Serve ${this.beverageName} to customer.`)
      console.log(); // new line
   }
}