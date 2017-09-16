import Ember from 'ember';

const {
  debug
} = Ember;

export default {

  baseURL: 'https://ghibliapi.herokuapp.com/',

  // Call when the route films/ is needed
  stubFilms(pretender, source) {
    return this.stubURL(pretender, source, `${this.baseURL}films`);
  },

  // Call when the route characters/ is needed, perform a fake request for each associated film
  stubCharacters(pretender, source) {
    let data =  this.deepClone(source);
    data.forEach((charaItem) => {
      charaItem.films.forEach((film) => {
        pretender.get(film.url, () => {
          let response = JSON.stringify(film);
          debug(`GET ${film.url}: ${response}`);
          return [
            200,
            { 'Content-Type': 'application/vnd.api+json' },
            response
          ];
        });
      });
    });
    data.forEach((character)=> {
      this.formatCharacter(character);
    });
    return this.stubURL(pretender, data, `${this.baseURL}people`);
  },

  // Call when the route locations/ is needed, perform a fake request for each associated film
  stubLocations(pretender, source) {
    let data =  this.deepClone(source);
    data.forEach((locItem) => {
      locItem.films.forEach((film) => {
        pretender.get(film.url, () => {
          let response = JSON.stringify(film);
          debug(`GET ${film.url}: ${response}`);
          return [
            200,
            { 'Content-Type': 'application/vnd.api+json' },
            response
          ];
        });
      });
    });
    data.forEach((location)=> {
      this.formatLocation(location);
    });
    return this.stubURL(pretender, data, `${this.baseURL}locations`);
  },

  // Call when the route vehicles/ is needed, perform a fake request for the associated film and pilot
  stubVehicles(pretender, source) {
    source.forEach((vehicleItem) => {
      pretender.get(`${vehicleItem.pilot.url}`, () => {
        let data = this.deepClone(vehicleItem.pilot);
        this.formatCharacter(data);
        let response = JSON.stringify(data);
        debug(`GET ${vehicleItem.pilot.url}: ${response}`);
        return [
          200,
          { 'Content-Type': 'application/vnd.api+json' },
          response
        ];
      });
      pretender.get(`${vehicleItem.films.url}`, () => {
        let response = JSON.stringify(vehicleItem.films);
        debug(`GET ${vehicleItem.films.url}: ${response}`);
        return [
          200,
          { 'Content-Type': 'application/vnd.api+json' },
          response
        ];
      });
    });
    let data =  this.deepClone(source);
    data.forEach((vehicle)=> {
      this.formatVehicle(vehicle);
    });
    return this.stubURL(pretender, data, `${this.baseURL}vehicles`);
  },

  // Generic method to perform a fake request on each item of the asked models
  stubURL(pretender, data, url) {
    data.forEach((item) => {
      pretender.get(`${url}/${item.id}`, () => {
        let response = JSON.stringify(item);
        debug(`GET ${url}/${item.id}: ${response}`);
        return [
          200,
          { 'Content-Type': 'application/vnd.api+json' },
          response
        ];
      });
    });
    pretender.get(url, () => {
      let response = JSON.stringify(data);
      debug(`GET ${url}: ${response}`);
      return [
        200,
        { 'Content-Type': 'application/vnd.api+json' },
        response
      ];
    });
  },

  deepClone(object) {
    return JSON.parse(JSON.stringify(object));
  },

  formatItem(item) {
    return item = item.url;
  },

  formatArray(data, key) {
    data[key] = data[key].map((item) => {
      return this.formatItem(item);
    });
  },

  formatCharacter(data) {
    this.formatArray(data, 'films');
  },

  formatLocation(data) {
    this.formatArray(data, 'residents');
    this.formatArray(data, 'films');
  },

  formatVehicle(data) {
    data.pilot = this.formatItem(data.pilot);
    data.films = this.formatItem(data.films);
  }
};
