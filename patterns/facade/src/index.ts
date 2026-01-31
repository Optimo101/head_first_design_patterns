import { Amplifier } from './home_theatre_components/Amplifier';
import { PopcornPopper } from './home_theatre_components/PopcornPopper';
import { Projector } from './home_theatre_components/Projector';
import { Screen } from './home_theatre_components/Screen';
import { StreamingPlayer } from './home_theatre_components/StreamingPlayer';
import { TheatreLights } from './home_theatre_components/TheatreLights';
import { Tuner } from './home_theatre_components/Tuner';
import { HomeTheatreFacade } from './HomeTheatreFacade';


/*
  Provides a unified interface to a set of interfaces in a subsystem.
  Facade defines a higher-level interace that makes the subsytem easier to use.
*/
const homeTheatre: HomeTheatreFacade = new HomeTheatreFacade(
  new Amplifier(),
  new Tuner(),
  new StreamingPlayer(),
  new Projector(),
  new Screen(),
  new TheatreLights(),
  new PopcornPopper()
);

homeTheatre.watchMovie('The Matrix');
homeTheatre.endMovie();