class UI {
  constructor() {
    this.dateTime = document.getElementById('dateTime');
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
  }

  displayDateTime(datetime) {
    // Display date and time
    this.dateTime.textContent = datetime.toDateString();
  }
 
  paint(weather) {
    // Display city and country
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    // Display weather description
    this.desc.textContent = weather.weather[0].description;
    // Display temperature
    this.string.textContent = `${weather.main.temp} ˚F`;
    // Display icon
    this.icon.setAttribute('src', `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    // Display humidity
    this.humidity.textContent = `Relative humidity: ${weather.main.humidity} %`;
    // Display feels like
    this.feelsLike.textContent = `Feels like: ${weather.main.feels_like} ˚F`;
    // Display dewpoint
    this.pressure.textContent = `Pressure: ${weather.main.pressure} hpa`;
    // Display wind
    this.wind.textContent = `Wind speed: ${weather.wind.speed} mph`; 
  }

  displayAlert(error, className) {
    // Get elements
    const errorParent = document.getElementById('errorParent');
    // Create error div
    const errorDiv = document.createElement('div');
    // Add classes for alert
    errorDiv.className = className;
    // Add text node and append to div
    errorDiv.appendChild(document.createTextNode(error));
    // insert alert div inside parent
    errorParent.appendChild(errorDiv);
    // Clear alert after 3 seconds
    setTimeout(this.clearAlert, 3000);
  }

  clearAlert() {
    document.querySelector('.alert').remove();
  }
}
