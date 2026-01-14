export class Singleton {
   private static uniqueInstance: Singleton;
   private static instanceCount: number = 0; // if Singleton pattern is correct, this should be <= 1

   constructor() {
      Singleton.instanceCount++;
   }

   public static getInstance(): Singleton {
      if (this.uniqueInstance == undefined) {
         this.uniqueInstance = new Singleton();
      }
      return this.uniqueInstance;
   }

   // to help prove only one instance of Singleton can be created
   public static getInstanceCount(): number {
      return this.instanceCount;
   }
}