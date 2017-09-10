import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('detail-header', 'Integration | Component | detail header', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{detail-header}}`);

  assert.equal(this.$().text().trim(), '');

});
