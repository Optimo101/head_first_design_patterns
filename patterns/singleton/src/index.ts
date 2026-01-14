import { Singleton } from "./Singleton";

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(`Number of Singleton instances: ${Singleton.getInstanceCount()}`)

if (instance1 === instance2) {
   console.log('instance1 and instance2 point to the same object')
} else {
   console.log('instance1 and instance2 are two different objects')
}