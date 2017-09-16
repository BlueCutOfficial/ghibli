import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('link-to/film-button', 'Integration | Component | link to/film button', {
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
  this.render(hbs`{{link-to/film-button film=passedModel}}`);
  assert.equal(this.$('.film-button-title').text().trim(), 'Title', 'display title');
  assert.equal(this.$('.film-button-desc').text().trim(), '"Desc..."', 'display description');
  assert.equal(this.$('.unseen').length, 0, 'display seen');

  this.set('passedModel.isSeen', false);
  this.render(hbs`{{link-to/film-button film=passedModel}}`);
  assert.equal(this.$('.unseen').length, 1, 'display seen');

});
