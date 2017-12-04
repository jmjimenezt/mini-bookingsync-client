import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('rentals', function () {
    this.route('show', { path: '/:rental_id' });
    this.route('rental-bookings', { path: '/:rental_id/bookings' });
  });

  //this.route('rental-bookings', { path: '/:rental_id/bookings' });

  //this.route('rental-bookings', function() {
  //});

  /*this.route('rentals/:rental_id/bookings', function() {
    console.log('aqui');
  });*/
});

export default Router;
