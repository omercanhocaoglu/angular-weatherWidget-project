import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.scss']
})
export class WeatherAppComponent implements OnInit {
  WeatherData: any;
  
  constructor (  ) { };

  ngOnInit(): void {
    this.getWeatherData();
    // console.log(this.WeatherData);
   };

  getWeatherData () {
    let data = JSON.parse('{"coord":{"lon":28.9833,"lat":41.0351},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":294.02,"feels_like":294.2,"temp_min":293.19,"temp_max":295.24,"pressure":1012,"humidity":78},"visibility":10000,"wind":{"speed":3.6,"deg":280},"clouds":{"all":75},"dt":1685454913,"sys":{"type":1,"id":6970,"country":"TR","sunrise":1685414132,"sunset":1685467674},"timezone":10800,"id":745042,"name":"Istanbul","cod":200}')
    this.setWeatherData(data);
  };
  date = new Date().toLocaleDateString();
  time = new Date().getHours();
  minute = new Date().getMinutes();

  

  setWeatherData (data) {
    this.WeatherData = data;
    let sunsetTime = new Date( this.WeatherData.sys.sunset * 1000 );
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.name = this.WeatherData.name;
    this.WeatherData.isDay = ( currentDate.getTime() < sunsetTime.getTime() );
    this.WeatherData.temp_celcius = ( this.WeatherData.main.temp - 273.15 ).toFixed(0);
    this.WeatherData.temp_min = ( this.WeatherData.main.temp_min - 273.15 ).toFixed(0);
    this.WeatherData.temp_max = ( this.WeatherData.main.temp_max - 273.15 ).toFixed(0);
    this.WeatherData.temp_feels_like = ( this.WeatherData.main.feels_like - 273.15 ).toFixed(0);
    this.WeatherData.humidity = this.WeatherData.main.humidity ;
    this.WeatherData.wind = this.WeatherData.wind.speed ;
    this.WeatherData.sunsetTime =  this.WeatherData.sunset_time ;
    this.WeatherData.description = this.WeatherData.weather[0].description;
  };

}
