import { test } from 'qunit';
import moduleForAcceptance from 'ghibli/tests/helpers/module-for-acceptance';
import Pretender from 'pretender';
import httpStubs from '../helpers/http-stubs';

let server;

moduleForAcceptance(('Acceptance | films'), {
  afterEach() {
    server.shutdown();
  }
});

let film1 = {
  'id': '2baf70d1-42bb-4437-b551-e5fed5a87abe',
  'title': 'Castle in the Sky',
  'description': 'The orphan Sheeta inherited a mysterious crystal ...',
  'director': 'Hayao Miyazaki',
  'producer': 'Isao Takahata',
  'release_date': '1986',
  'rt_score': '95'
};

let film2 = {
  'id': '12cfb892-aac0-4c5b-94af-521852e46d6a',
  'title': 'Grave of the Fireflies',
  'description': 'In the latter part of World War II, a boy and his sister...',
  'director': 'Isao Takahata',
  'producer': 'Toru Hara',
  'release_date': '1988',
  'rt_score': '97'
};

test('load films', function(assert) {

  server = new Pretender(function() {
    httpStubs.stubFilms(this, [film1, film2]);
  });
  visit('/films');

  andThen(function() {
    assert.equal(currentURL(), '/films', 'URL ok');
    assert.equal(find('.film-button').length, 2, 'All films are rendered');
  });
});

test('click film', function(assert) {

  server = new Pretender(function() {
    httpStubs.stubFilms(this, [film1]);
  });
  visit('/films').click('.film-button');

  andThen(function() {
    assert.equal(currentURL(), '/films/2baf70d1-42bb-4437-b551-e5fed5a87abe/detail', 'Detail URL ok after clicking a film');
  });
});