const test = require('node:test');
const assert = require('node:assert/strict');
const data = require('../data/sourcing_data.json');

test('sourcing intelligence dataset has required countries and fields', () => {
  assert.ok(Array.isArray(data));
  assert.ok(data.length >= 6);

  const countries = data.map((item) => item.country);
  for (const required of ['China', 'India', 'Vietnam', 'Turkey', 'Germany', 'Mexico']) {
    assert.ok(countries.includes(required), `Missing country: ${required}`);
  }

  for (const item of data) {
    assert.equal(typeof item.country, 'string');
    assert.ok(Array.isArray(item.industries));
    assert.ok(Array.isArray(item.products));
    assert.equal(typeof item.exportStrength, 'string');
    assert.ok(Number(item.tradeIndicator) > 0);
  }
});
