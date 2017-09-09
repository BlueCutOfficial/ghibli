import { moduleForModel, test } from 'ember-qunit';
import { parseURL } from 'ghibli/serializers/application';

// Test application serializer with film as model
moduleForModel('film', 'Unit | Serializer | application', {
  needs: ['serializer:application', 'model:person', 'model:location', 'model:vehicle']
});

test('it serializes records', function(assert) {
  let record = this.subject();
  let serializedRecord = record.serialize();
  assert.ok(serializedRecord);
});

test('parseURL function', function(assert) {
  let stringToParse = '/aaa/bbb/ccc';
  assert.ok(parseURL(stringToParse) === 'ccc');
});
