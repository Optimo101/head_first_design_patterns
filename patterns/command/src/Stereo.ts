export class Stereo {
   on(): void {
      console.log("Stereo is On.");
   }

   off (): void {
      console.log("Stereo is Off.");
   }

   setCD(): void {
      console.log("Stereo set to CD mode.");
   }

   setVolume(level: number) {
      console.log(`Stereo volume set to: ${level}`);
   }
}