import { EnemyLoadout } from "./EnemyLoadoutBuilder";
import { DemonicFactory } from "./faction-factory/DemonicFactory";
import { UndeadFactory } from "./faction-factory/UndeadFactory";

const undeadFactory = new UndeadFactory();
const demonicFactory = new DemonicFactory();

const undeadEncounter = new EnemyLoadout(undeadFactory);
undeadEncounter.createEnemyWithGear();

console.log() // new line

const demonEncounter = new EnemyLoadout(demonicFactory);
demonEncounter.createEnemyWithGear();