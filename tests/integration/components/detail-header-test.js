import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('detail-header', 'Integration | Component | detail header', {
  integration: true
});

test('Renders text', function(assert) {

  this.render(hbs`{{detail-header text='Text to display'}}`);

  assert.equal(this.$().text().trim(), 'Text to display', 'display text : ok');

});
