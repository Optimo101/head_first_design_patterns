import { WeatherData } from "./weather-data/WeatherData";
import { CurrentConditionsDisplay } from "./weather-display/CurrentConditionsDisplay";

const weatherData: WeatherData = new WeatherData();
const currentDisplay: CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData);

weatherData.setMeasurements(75, 100, 29.7);