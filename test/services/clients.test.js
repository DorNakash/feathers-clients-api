const assert = require('assert');
const app = require('../../src/app');

describe('\'clients\' service', () => {
  it('registered the service', () => {
    const service = app.service('create');

    assert.ok(service, 'Registered the service');
  });
});
