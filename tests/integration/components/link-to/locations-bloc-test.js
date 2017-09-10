import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('link-to/locations-bloc', 'Integration | Component | link to/locations bloc', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{link-to/locations-bloc}}`);

  assert.equal(this.$().text().trim(), '');
});
