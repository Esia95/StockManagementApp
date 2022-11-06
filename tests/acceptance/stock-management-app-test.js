import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | stock management app', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('h1').hasText('ŁAD I HARMONIA');

    assert.dom('[data-test-navbar-home]').hasText('StockManagementApp');
    await click('[data-test-navbar-home]');
    assert.strictEqual(currentURL(), '/');

    assert.dom('[data-test-navbar-orders]').hasText('Zamówienia');
    await click('[data-test-navbar-orders]');
    assert.strictEqual(currentURL(), '/orders');

    assert.dom('[data-test-navbar-warehouse]').hasText('Magazyn');
    await click('[data-test-navbar-warehouse]');
    assert.strictEqual(currentURL(), '/warehouse');

    assert.dom('[data-test-navbar-archive]').hasText('Archiwum');
    await click('[data-test-navbar-archive]');
    assert.strictEqual(currentURL(), '/archive');

    assert.dom('[data-test-navbar-logout]').hasText('Wyloguj się');
  });
});
