export default {

  baseURL: 'https://ghibliapi.herokuapp.com/',

  // Call when the route films/ is needed
  stubFilms(pretender, data) {
    return this.stubURL(pretender, data, `${this.baseURL}films`);
  },

  // Call when the route characters/ is needed, perform a fake request for each associated film
  stubCharacters(pretender, data) {
    data.forEach((charaItem) => {
      charaItem.films.forEach((filmURL) => {
        pretender.get(filmURL, () => {
          return [
            200,
            { 'Content-Type': 'application/vnd.api+json' },
            JSON.stringify(charaItem)
          ];
        });
      });
    });
    return this.stubURL(pretender, data, `${this.baseURL}people`);
  },

  // Call when the route locations/ is needed, perform a fake request for each associated film
  stubLocations(pretender, data) {
    data.forEach((locItem) => {
      locItem.films.forEach((filmURL) => {
        pretender.get(filmURL, () => {
          return [
            200,
            { 'Content-Type': 'application/vnd.api+json' },
            JSON.stringify(locItem)
          ];
        });
      });
    });
    return this.stubURL(pretender, data, `${this.baseURL}locations`);
  },

  stubVehicles(pretender, data) {
    return this.stubURL(pretender, data, `${this.baseURL}vehicles`);
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
