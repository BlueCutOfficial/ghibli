import { moduleForModel, test } from 'ember-qunit';

// Test application serializer from film as model
moduleForModel('film', 'Unit | Serializer | application', {
  needs: ['serializer:application']
});

test('it serializes records', function(assert) {
  let record = this.subject();
  let serializedRecord = record.serialize();
  assert.ok(serializedRecord);
});
