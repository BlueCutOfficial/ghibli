import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('detail-lines', 'Integration | Component | detail lines', {
  integration: true
});

test('Renders lines and description', function(assert) {

  this.set('passedLines', [
    {
      'key': 'Key 1',
      'value': 'Value 1'
    },
    {
      'key': 'Key 2',
      'value': 'Value 2'
    }
  ]);

  this.render(hbs`{{detail-lines lines=passedLines}}`);

  assert.equal(this.$('.detail-desc').length, 0, 'No description');
  assert.equal(this.$('.desc-line:first').text().trim(), 'Key 1: Value 1', 'Write first line');
  assert.equal(this.$('.desc-line:last').text().trim(), 'Key 2: Value 2', 'Write last line');

  this.set('passedDesc', 'Some description');
  this.render(hbs`{{detail-lines description=passedDesc lines=passedLines}}`);
  assert.equal(this.$('.detail-desc:first').text().trim(), 'Some description', 'Write description');

});
