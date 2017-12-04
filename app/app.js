import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import DS from 'ember-data';

import { computed } from '@ember/object';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

/**
 * TODO: Check this out, it's not working yet.
 * API authenticable is pending.
 */
App.ApplicationAdapter = DS.JSONAPIAdapter.extend({
  headers: {
    'API_KEY': 'secret key'
  }
});

App.ApplicationAdapter = DS.JSONAPIAdapter.reopen({
  host: 'http://localhost:3000'
});

loadInitializers(App, config.modulePrefix);

export default App;
