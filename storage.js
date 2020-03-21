class Storage {
  constructor() {
    this.city;
    this.country;
    this.defaultCity = 'Los Angeles';
    this.defaultCountry = 'US';
  }

  getLocationData() {
    if((typeof localStorage.getItem('city') !== 'string') || localStorage.getItem('city') === '') {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    if((typeof localStorage.getItem('country') !== 'string') || localStorage.getItem('country') === '') {
      this.country = this.defaultCountry;
    } else {
      this.country = localStorage.getItem('country');
    }

    return {
      city: this.city,
      country: this.country
    }
  }

  setLocationData(city, country) {
    localStorage.setItem('city', city);
    localStorage.setItem('country', country);
  }
}