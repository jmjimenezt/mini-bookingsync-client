import Route from '@ember/routing/route';
import Ember from 'ember';
import SessionService from 'ember-simple-auth/services/session';

export default Route.extend({    
    model(params) {
        return this.get('store').findRecord('rental', params.rental_id);
        //return this.get('store').findAll('booking');
    }
});