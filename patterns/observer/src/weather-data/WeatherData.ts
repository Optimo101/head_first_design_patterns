import { Subject } from "./Subject";
import { Observer } from "../weather-display/Observer";

export class WeatherData implements Subject {
   private observers: Observer[] = [];
   private temperature!: number;
   private humidity!: number;
   private pressure!: number;

   constructor(temperature: number, humidity: number, pressure: number) {
      this.setMeasurements(temperature, humidity, pressure);
   }
   

   registerObserver(o: Observer): void {
      this.observers.push(o);
   }

   removeObserver(o: Observer): void {
      this.observers = this.observers.filter(obs => obs !== o);
   }

   notifyObservers(): void {
      this.observers.forEach((o) => {
         o.update();
      })
   }

   private measurementsChanged(): void {
      this.notifyObservers();
   }

   setMeasurements(temperature: number, humidity: number, pressure: number) {
      this.temperature = temperature;
      this.humidity = humidity;
      this.pressure = pressure;
      this.measurementsChanged();
   }

   getTemperature(): number {
      return this.temperature;
   }

   getHumidity(): number {
      return this.humidity;
   }

   getPressure(): number {
      return this.pressure;
   }
}