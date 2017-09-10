import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('link-to/films-bloc', 'Integration | Component | link to/films bloc', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{link-to/films-bloc}}`);

  assert.equal(this.$().text().trim(), '');
});
