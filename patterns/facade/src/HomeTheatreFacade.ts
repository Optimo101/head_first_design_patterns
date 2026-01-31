import { Amplifier } from "./home_theatre_components/Amplifier";
import { PopcornPopper } from "./home_theatre_components/PopcornPopper";
import { Projector } from "./home_theatre_components/Projector";
import { Screen } from "./home_theatre_components/Screen";
import { StreamingPlayer } from "./home_theatre_components/StreamingPlayer";
import { TheatreLights } from "./home_theatre_components/TheatreLights";
import { Tuner } from "./home_theatre_components/Tuner";

export class HomeTheatreFacade {
  amp: Amplifier;
  tuner: Tuner;
  player: StreamingPlayer;
  projector: Projector;
  screen: Screen;
  lights: TheatreLights;
  popper: PopcornPopper;

  constructor(
    amp: Amplifier,
    tuner: Tuner,
    player: StreamingPlayer,
    projector: Projector,
    screen: Screen,
    lights: TheatreLights,
    popper: PopcornPopper
  ) {
    this.amp = amp;
    this.tuner = tuner;
    this.player = player;
    this.projector = projector;
    this.screen = screen;
    this.lights = lights;
    this.popper = popper;
  }

  watchMovie(movie: string): void {
    console.log(`Getting ready to watch a movie...`);
    this.popper.on();
    this.popper.pop();
    this.lights.dim(10);
    this.screen.down();
    this.projector.on();
    this.projector.wideScreenMode();
    this.amp.on();
    this.amp.setStreamingPlayer(this.player);
    this.amp.setSurroundSound();
    this.amp.setVolume(5);
    this.player.on();
    this.player.play(movie);
    console.log(); // line break
  }

  endMovie(): void {
    console.log(`Shutting home theatre down...`);
    this.popper.off();
    this.lights.on();
    this.screen.up();
    this.projector.off();
    this.amp.off();
    this.player.stop();
    this.player.off();
    console.log(); // line break
  }
}