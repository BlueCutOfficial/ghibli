export default {

  stubFilms(pretender, data) {
    return this.stubURL(pretender, data, 'https://ghibliapi.herokuapp.com/films');
  },

  stubCharacters(pretender, data) {
    return this.stubURL(pretender, data, 'https://ghibliapi.herokuapp.com/people');
  },

  stubLocations(pretender, data) {
    return this.stubURL(pretender, data, 'https://ghibliapi.herokuapp.com/locations');
  },

  stubVehicles(pretender, data) {
    return this.stubURL(pretender, data, 'https://ghibliapi.herokuapp.com/vehicles');
  },

  stubURL(pretender, data, url) {

    data.forEach((item) => {

      pretender.get(`${url}/${item.id}`, () => {
        return [
          200,
          { 'Content-Type': 'application/vnd.api+json' },
          JSON.stringify(item)
        ];
      });
    });

    pretender.get(url, () => {
      return [
        200,
        { 'Content-Type': 'application/vnd.api+json' },
        JSON.stringify(data)
      ];
    });
  }

};
