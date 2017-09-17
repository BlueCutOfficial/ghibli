import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bind/film-button', 'Integration | Component | bind/film button', {
  integration: true
});

test('Renders info', function(assert) {

  this.set('passedModel',
    {
      'id': '1',
      'title': 'Title',
      'shortDescription': 'Desc...',
      'isSeen': true
    }
  );
  this.render(hbs`{{bind/film-button film=passedModel}}`);
  assert.equal(this.$('.film-button-title').text().trim(), 'Title', 'display title');
  assert.equal(this.$('.film-button-desc').text().trim(), '"Desc..."', 'display description');
  assert.equal(this.$('.unseen').length, 0, 'display seen');

  this.set('passedModel.isSeen', false);
  this.render(hbs`{{bind/film-button film=passedModel}}`);
  assert.equal(this.$('.unseen').length, 1, 'display seen');

});
