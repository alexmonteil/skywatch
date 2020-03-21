// Init storage object
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData(); 
// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// Init UI object
const ui = new UI();


// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getData);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', e => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  if(city !== '' && country !== '') {
    // Change location
    weather.changeLocation(city, country);

    // Set location in LS
    storage.setLocationData(city, country);

    // Get and display weather
    getData();

    // Close modal
    $('#locModal').modal('hide');
  } else {
    // Display alert
    ui.displayAlert('PLEASE ENTER A CITY AND COUNTRY', 'alert alert-danger text-center font-weight-bold');

    // Close modal
    $('#locModal').modal('hide');
  }
});

// Get data and display
function getData(){
  // Display date and time
  ui.displayDateTime(weather.getDateTime());
  // Call API and display weather
  weather.getWeather()
    .then(results => {
      if(results.cod === 200) {
        // Display API data
        ui.paint(results);
      } else {
        // Display alert 
        ui.displayAlert('CITY NOT FOUND', 'alert alert-warning text-center font-weight-bold');
        // Clear LS
        localStorage.clear();
      }
    })
    .catch(err => console.log(err));
}


