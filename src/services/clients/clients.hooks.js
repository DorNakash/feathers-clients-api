
const validEmail = require('../../hooks/valid-email');
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [validEmail()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [validEmail()],
    patch: [validEmail()],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
