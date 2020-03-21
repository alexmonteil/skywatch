class Weather {
  constructor(city, country) {
    this.apiKey = 'f55958af6bdf36138a063ca9b978f162';
    this.city = city;
    this.country = country;
    this.dateTime;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=imperial&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }

  // Get date and time
  getDateTime() {
    this.dateTime = new Date();
    return this.dateTime;
  }
}