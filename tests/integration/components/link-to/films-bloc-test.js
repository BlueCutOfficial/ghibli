import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('link-to/films-bloc', 'Integration | Component | link to/films bloc', {
  integration: true
});

test('Renders sigle item', function(assert) {

  this.set('passedModel', [
    {
      'id': '1',
      'title': 'First item name'
    }
  ]);

  this.render(hbs`{{link-to/films-bloc title='Title' model=passedModel}}`);

  assert.ok(this.$().text().indexOf('Title') >= 0, 'title display : ok');
  assert.ok(this.$('.md-button').text().indexOf('First item name') >= 0, 'button text : ok');

});

test('Renders list', function(assert) {

  this.set('passedModel', [
    {
      'id': '1',
      'title': 'First item name'
    },
    {
      'id': '2',
      'title': 'Second item name'
    }
  ]);

  this.render(hbs`{{link-to/films-bloc title='Title' model=passedModel}}`);

  assert.ok(this.$('.md-button').length === 2, 'number of item : ok');
  assert.ok(this.$('.md-button').text().indexOf('First item name') >= 0, 'display first button text : ok');
  assert.ok(this.$('.md-button').text().indexOf('Second item name') >= 0, 'display second button text : ok');

});
