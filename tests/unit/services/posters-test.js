import { moduleFor, test } from 'ember-qunit';

moduleFor('service:posters', 'Unit | Service | posters', {
  // Specify the other units that are required for this test.
  needs: ['service:ajax']
});

// Replace this with your real tests.
test('it exists', function(assert) {

  let service = this.subject();
  assert.ok(service);
});
