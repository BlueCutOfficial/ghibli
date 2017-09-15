import { test } from 'qunit';
import moduleForAcceptance from 'ghibli/tests/helpers/module-for-acceptance';
import Pretender from 'pretender';
import httpStubs from '../helpers/http-stubs';
import data from '../helpers/variables';

let server;

moduleForAcceptance(('Acceptance | characters'), {
  afterEach() {
    server.shutdown();
  }
});

// Perform fake requests with wanted characters data and Promise.all models
function serverConfig(characterData) {
  return new Pretender(function() {
    httpStubs.stubLocations(this, [data.location1]);
    httpStubs.stubVehicles(this, [data.vehicle1]);
    httpStubs.stubCharacters(this, characterData);
  });
}

test('Display characters list', function(assert) {
  server = serverConfig([data.character1, data.character2]);
  visit('/characters');
  andThen(function() {
    assert.equal(currentURL(), '/characters', 'URL ok');
    assert.equal(find('.sidenav-button').length, 2, 'All characters are rendered');
  });
});

test('Click character', function(assert) {
  server = serverConfig([data.character1, data.character2]);
  visit('/characters').click('.sidenav-button');
  andThen(function() {
    assert.equal(currentURL(), '/characters/31/detail', 'URL ok');
  });
});

test('Display Detail', function(assert) {
  server = serverConfig([data.character1]);
  visit('/characters/31/detail');
  andThen(function() {
    assert.ok(find('h1').text().indexOf('Colonel Muska') >= 0, 'display title');
    assert.equal(find('.desc-line:first').text().trim(), 'Gender: Male', 'display gender');
    assert.equal(find('.desc-line:nth-child(2)').text().trim(), 'Age: 33', 'display age');
    assert.equal(find('.desc-line:nth-child(3)').text().trim(), 'Eye color: Grey', 'display eye color');
    assert.equal(find('.desc-line:last').text().trim(), 'Hair color: Brown', 'display hair color');
  });
});
