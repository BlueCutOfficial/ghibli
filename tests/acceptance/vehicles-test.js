import { test } from 'qunit';
import moduleForAcceptance from 'ghibli/tests/helpers/module-for-acceptance';
import Pretender from 'pretender';
import httpStubs from '../helpers/http-stubs';
import { film1, character1, vehicle1, vehicle2 } from '../helpers/variables';

let server;

moduleForAcceptance(('Acceptance | vehicles'), {
  afterEach() {
    server.shutdown();
  }
});

// Perform fake requests with wanted locations
function serverConfig(vehicleData) {
  return new Pretender(function() {
    httpStubs.stubFilms(this, [film1]);
    httpStubs.stubCharacters(this, [character1]);
    httpStubs.stubVehicles(this, vehicleData);
  });
}

test('Display vehicles list', function(assert) {
  server = serverConfig([vehicle1, vehicle2]);
  visit('/vehicles');
  andThen(function() {
    assert.equal(currentURL(), '/vehicles', 'URL ok');
    assert.equal(find('.sidenav-button').length, 2, 'All vehicles are rendered');
  });
});

test('Click vehicles', function(assert) {
  server = serverConfig([vehicle1]);
  visit('/vehicles').click('.sidenav-button');
  andThen(function() {
    assert.equal(currentURL(), '/vehicles/41/detail', 'URL ok');
  });
});

test('Display Detail', function(assert) {
  server = serverConfig([vehicle1]);
  visit('/vehicles/41/detail');
  andThen(function() {
    assert.ok(find('h1').text().indexOf('Air Destroyer Goliath') >= 0, 'display title');
    assert.equal(find('.desc-line:first').text().trim(), 'Military airship utilized to access Laputa', 'display description');
    assert.equal(find('.desc-line:nth-child(3)').text().trim(), 'Vehicle class: Airship', 'display class');
    assert.equal(find('.desc-line:last').text().trim(), 'Length: 1,000', 'display length');
  });
});
