import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('link-to/vehicles-bloc', 'Integration | Component | link to/vehicles bloc', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{link-to/vehicles-bloc}}`);

  assert.equal(this.$().text().trim(), '');
});
