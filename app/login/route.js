import Route from '@ember/routing/route';
import { storageFor } from 'ember-local-storage';
import { inject as service } from '@ember/service';

export default class LoginRoute extends Route {
  @service router;
  @storageFor('logged-as') loggedAs;

  beforeModel() {
    const userId = this.loggedAs.get('id');
    if (userId) {
      //this.router.tarnsitionTo('index');
      return;
    }
  }
}
