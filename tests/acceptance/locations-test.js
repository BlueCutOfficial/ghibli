import { test } from 'qunit';
import moduleForAcceptance from 'ghibli/tests/helpers/module-for-acceptance';
import Pretender from 'pretender';
import httpStubs from '../helpers/http-stubs';
import { location1, location2 } from '../helpers/variables';

let server;

moduleForAcceptance(('Acceptance | locations'), {
  afterEach() {
    server.shutdown();
  }
});

// Perform fake requests with wanted locations
function serverConfig(locationData) {
  return new Pretender(function() {
    httpStubs.stubLocations(this, locationData);
  });
}

test('Display locations list', function(assert) {
  server = serverConfig([location1, location2]);
  visit('/locations');
  andThen(function() {
    assert.equal(currentURL(), '/locations', 'URL ok');
    assert.equal(find('.sidenav-button').length, 2, 'All locations are rendered');
  });
});

test('Click locations', function(assert) {
  server = serverConfig([location1]);
  visit('/locations').click('.sidenav-button');
  andThen(function() {
    assert.equal(currentURL(), '/locations/21/detail', 'URL ok');
  });
});

test('Display Detail', function(assert) {
  server = serverConfig([location1]);
  visit('/locations/21/detail');
  andThen(function() {
    assert.ok(find('h1').text().indexOf('Laputa') >= 0, 'display title');
    assert.equal(find('.desc-line:first').text().trim(), 'Climate: Continental', 'display climate');
    assert.equal(find('.desc-line:nth-child(2)').text().trim(), 'Terrain: City', 'display terrain');
    assert.equal(find('.desc-line:last').text().trim(), 'Surface water: 40', 'display surface water');
  });
});
