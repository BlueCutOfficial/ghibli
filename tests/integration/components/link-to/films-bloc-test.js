import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('link-to/films-bloc', 'Integration | Component | link to/films bloc', {
  integration: true
});

test('it renders', function(assert) {

  // eslint-disable-next-line
  let filmsModel = [
    {
      'id': '2baf70d1-42bb-4437-b551-e5fed5a87abe',
      'title': 'Castle in the Sky',
      'description': 'The orphan Sheeta inherited a mysterious crystal ...',
      'director': 'Hayao Miyazaki',
      'producer': 'Isao Takahata',
      'release_date': '1986',
      'rt_score': '95'
    }
  ];

  this.render(hbs`{{link-to/films-bloc title='Appears in' model=filmsModel}}`);

  assert.equal(this.$().text().trim(), 'Appears in');
  assert.ok(this.$('.md-button:contains("Castle in the Sky")'));

});
