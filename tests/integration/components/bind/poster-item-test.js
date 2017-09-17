import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bind/poster-item', 'Integration | Component | bind/poster item', {
  integration: true
});

test('Renders expected size', function(assert) {

  this.set('passedId', 1);
  this.set('passedTitle', 'Castle In The Sky');
  this.set('passedClassImg', 'poster-small');

  this.render(hbs`{{bind/poster-item id=passedId title=passedTitle classImg=passedClassImg}}`);
  assert.equal(this.$('.poster-small').length, 1, 'find class poster-small');
  assert.equal(this.$('.poster-small:first').width(), 60, 'expected size for poster-small');

  this.set('passedClassImg', 'poster-middle');
  assert.equal(this.$('.poster-middle').length, 1, 'find class poster-middle');
  assert.equal(this.$('.poster-middle:first').width(), 210, 'expected size for poster-middle');
});
