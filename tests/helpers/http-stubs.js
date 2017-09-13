export default {

  stubFilms(pretender, data) {

    let filmsUrl = 'https://ghibliapi.herokuapp.com/films';
    data.forEach((item) => {

      pretender.get(`${filmsUrl}/${item.id}`, () => {
        return [
          200,
          { 'Content-Type': 'application/vnd.api+json' },
          JSON.stringify(item)
        ];
      });
    });

    pretender.get(filmsUrl, () => {
      return [
        200,
        { 'Content-Type': 'application/vnd.api+json' },
        JSON.stringify(data)
      ];
    });
  }

};
