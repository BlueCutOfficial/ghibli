import { test } from 'qunit';
import moduleForAcceptance from 'ghibli/tests/helpers/module-for-acceptance';

moduleForAcceptance(('Acceptance | index'), {});

test('Visit index', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/films', 'URL ok');
  });
});
