import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import DS from 'ember-data';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:3000'
});

loadInitializers(App, config.modulePrefix);

export default App;
