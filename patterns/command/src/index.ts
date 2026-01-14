import { RemoteControl } from "./RemoteControl";
import { Command } from "./commands/ICommand";
import { Light } from "./Light";
import { LightOnCommand } from "./commands/LightOnCommand";
import { LightOffCommand } from "./commands/LightOffCommand";
import { Stereo } from "./Stereo";
import { StereoOnWithCDCommand } from "./commands/StereoOnWithCDCommand";
import { StereoOffCommand } from "./commands/StereoOffCommand";

const remote: RemoteControl = new RemoteControl();

// instantiate the devices to be controlled
const light: Light = new Light();
const stereo: Stereo = new Stereo();

// create the commands for the devices
const lightOn: Command = new LightOnCommand(light);
const lightOff: Command = new LightOffCommand(light);
const stereoOn: Command = new StereoOnWithCDCommand(stereo);
const stereoOff: Command = new StereoOffCommand(stereo);

// load the command sto the remote buttons
remote.setCommand(0, lightOn, lightOff);
remote.setCommand(1, stereoOn, stereoOff);

// push the buttons
remote.onButtonPushed(0);
remote.onButtonPushed(1);
remote.undoButtonPushed();
remote.offButtonPushed(0);