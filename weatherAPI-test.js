import { WeatherAPI } from "./weatherAPI.js";
function testURLbuilder() {
  const weatherAPI = new WeatherAPI();
  weatherAPI.buildURL("agra");
}
function testAPI() {
  const weatherAPI = new WeatherAPI();
  let responseJSON = weatherAPI.invoke("agra").then((response) => {
  });
}

testURLbuilder();
testAPI();
