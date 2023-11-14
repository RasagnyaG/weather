import axios from "axios";
import { units } from "./utils.js";

const url = "https://api.openweathermap.org/data/2.5/weather";

const apiKey = "90cec1bc2a16e6e61ea8ada9d9c61656"; // not a good practice to directly include in the code, but adding it here for simplicity and accessibility

export const fetchWeather = async (city, unit) => {
  try {
    const urlwparams = `${url}?q=${city}&units=${unit}&appid=${apiKey}`;
    const res = await axios.get(urlwparams);
    return res.data.main.temp;
  } catch (error) {
    console.log(error);
  }
};
export const getData = async (cities, unit) => {
  var weather = {};
  console.log(unit);
  for (var city of cities) {
    const temp = await fetchWeather(city, unit);
    weather[city] = `${temp}${units[unit]}`;
  }
  return weather;
};
