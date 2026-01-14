import { WeatherData } from "../weather-data/WeatherData";
import { DisplayElement } from "./DisplayElement";
import { Observer } from "./Observer";

export class CurrentConditionsDisplay implements DisplayElement, Observer {
   private temperature: number;
   private humidity: number;
   private pressure: number;
   private weatherData: WeatherData;

   constructor(weatherData: WeatherData) {
      this.weatherData = weatherData;
      this.temperature = weatherData.getTemperature();
      this.humidity = weatherData.getHumidity();
      this.pressure = weatherData.getPressure();
      weatherData.registerObserver(this);
   }

   update(): void {
      this.temperature = this.weatherData.getTemperature();
      this.humidity = this.weatherData.getHumidity();
      this.pressure = this.weatherData.getPressure();
      this.display();
   }

   display(): void {
      console.log(`Current weather conditions: ${this.temperature} degrees Fahrenheit, ${this.humidity} humidity and ${this.pressure} pressure.`);
   }

   setWeatherData(wd: WeatherData) {
      this.weatherData.removeObserver(this);
      this.weatherData = wd;
      this.weatherData.registerObserver(this);
   }
}