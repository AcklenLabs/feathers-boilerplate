const globalHooks = require('../../../hooks'); // eslint-disable-line no-unused-vars
const hooks = require('feathers-hooks'); // eslint-disable-line no-unused-vars
const commonHooks = require('feathers-hooks-common');
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
  ],
  find: [commonHooks.softDelete()],
  get: [commonHooks.softDelete()],
  create: [],
  update: [],
  patch: [],
  remove: [],
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: [],
};