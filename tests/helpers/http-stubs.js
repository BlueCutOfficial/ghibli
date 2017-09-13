export default {

  stubFilms(pretender, data) {
    pretender.get('https://ghibliapi.herokuapp.com/films', () => {
      return [
        200,
        { 'Content-Type': 'application/vnd.api+json' },
        JSON.stringify(data)
      ];
    });
  }

};
