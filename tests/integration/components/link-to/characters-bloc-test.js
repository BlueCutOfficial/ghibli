import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('link-to/characters-bloc', 'Integration | Component | link to/characters bloc', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{link-to/characters-bloc}}`);

  assert.equal(this.$().text().trim(), '');
});
