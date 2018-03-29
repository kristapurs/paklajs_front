import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | veikals-route', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:veikals-route');
    assert.ok(route);
  });
});
