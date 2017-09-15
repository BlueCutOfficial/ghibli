import { test } from 'qunit';
import moduleForAcceptance from 'ghibli/tests/helpers/module-for-acceptance';
import Pretender from 'pretender';
import httpStubs from '../helpers/http-stubs';
import data from '../helpers/variables';

let server;

moduleForAcceptance(('Acceptance | films'), {
  afterEach() {
    server.shutdown();
  }
});

// Perform fake requests with wanted films data and some other models
function serverConfig(filmData) {
  return new Pretender(function() {
    httpStubs.stubLocations(this, [data.location1]);
    httpStubs.stubCharacters(this, [data.character1]);
    httpStubs.stubVehicles(this, [data.vehicle1]);
    httpStubs.stubFilms(this, filmData);
  });
}

test('Display films list', function(assert) {
  server = serverConfig([data.film1, data.film2]);
  visit('/films');
  andThen(function() {
    assert.equal(currentURL(), '/films', 'URL ok');
    assert.equal(find('.film-button').length, 2, 'All films are rendered');
  });
});

test('Click film', function(assert) {
  server = serverConfig([data.film1]);
  visit('/films').click('.film-button');
  andThen(function() {
    assert.equal(currentURL(), '/films/11/detail', 'Detail URL ok after clicking a film');
  });
});

test('Display Detail', function(assert) {
  server = serverConfig([data.film1]);
  visit('/films/11/detail');
  andThen(function() {
    assert.ok(find('h1').text().indexOf('Castle in the Sky') >= 0, 'display title');
    assert.ok(find('p:nth-child(1)').text().indexOf('Sheeta inherited a mysterious crystal') >= 0, 'display description');
    assert.equal(find('p:nth-child(3)').text().trim(), 'Director: Hayao Miyazaki', 'display director');
    assert.equal(find('p:nth-child(4)').text().trim(), 'Producer: Isao Takahata', 'display producer');
    assert.equal(find('p:nth-child(5)').text().trim(), 'Release date: 1986', 'display release date');
    assert.equal(find('p:nth-child(6)').text().trim(), 'Rating: 95', 'display rating');
  });
});

test('Back to films', function(assert) {
  serverConfig([data.film1]);
  visit('/films/11/detail').click('.back');
  andThen(function() {
    assert.equal(currentURL(), '/films', 'URL ok');
  });
});

test('Complete description', function(assert) {
  serverConfig([data.film1]);
  visit('/films');
  andThen(function() {
    assert.equal(find('.film-button-desc').text().trim(), '"Sheeta inherited a mysterious crystal"', 'Complete ok');
  });
});

test('Shorter description', function(assert) {
  serverConfig([data.film2]);
  visit('/films');
  andThen(function() {
    assert.equal(find('.film-button-desc').text().trim(), '"In the latter part of World War II, a bo..."', 'Shorter ok');
  });
});

test('Sorting query params', function(assert) {
  serverConfig([data.film1, data.film2, data.film3]);
  visit('/films');
  andThen(function() {
    assert.equal(find('.film-button-title:last').text(), 'Castle in the Sky', 'Default order 1/2');
    assert.equal(find('.film-button-title:first').text(), 'From Up on Poppy Hill', 'Default order 2/2');
  });

  visit('/films?sort=title:asc');
  andThen(function() {
    assert.equal(find('.film-button-title:first').text(), 'Castle in the Sky', 'Alphabetic order 1/2');
    assert.equal(find('.film-button-title:last').text(), 'Grave of the Fireflies', 'Alphabetic order 2/2');
  });

  visit('/films?sort=release_date:asc');
  andThen(function() {
    assert.equal(find('.film-button-title:first').text(), 'Castle in the Sky', 'Date asc order 1/2');
    assert.equal(find('.film-button-title:last').text(), 'From Up on Poppy Hill', 'Date asc order 2/2');
  });

  visit('/films?sort=release_date:desc');
  andThen(function() {
    assert.equal(find('.film-button-title:last').text(), 'Castle in the Sky', 'Date desc order 1/2');
    assert.equal(find('.film-button-title:first').text(), 'From Up on Poppy Hill', 'Date desc order 2/2');
  });
});
