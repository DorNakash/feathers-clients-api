// Initializes the `clients` service on path `/create`
const { Clients } = require('./clients.class');
const createModel = require('../../models/clients.model');
const hooks = require('./clients.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/create', new Clients(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('create');

  service.hooks(hooks);
};
