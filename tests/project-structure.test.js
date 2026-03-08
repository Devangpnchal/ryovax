const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const requiredFiles = [
  'frontend/pages/index.js',
  'frontend/pages/suppliers.js',
  'frontend/pages/rfq.js',
  'frontend/pages/become-supplier.js',
  'frontend/pages/industries.js',
  'frontend/pages/insights.js',
  'backend/api/routes.js',
  'backend/server.js'
];

test('required platform files exist', () => {
  for (const file of requiredFiles) {
    const full = path.join(process.cwd(), file);
    assert.ok(fs.existsSync(full), `Expected file missing: ${file}`);
  }
});

test('backend routes include required API endpoints', () => {
  const routes = fs.readFileSync(path.join(process.cwd(), 'backend/api/routes.js'), 'utf8');
  assert.match(routes, /router\.post\('\/rfq'/);
  assert.match(routes, /router\.post\('\/supplier'/);
  assert.match(routes, /router\.post\('\/contact'/);
});
