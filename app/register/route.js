import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
//import { action } from '@ember/object';

export default class RegisterRoute extends Route {
  @service store;
  @service router;
  @service session;

  beforeModel() {
    const { isUserLoggedIn } = this.session;
    if (isUserLoggedIn) {
      this.router.tarnsitionTo('home');
      return;
    }
  }

  model() {
    return this.store.createRecord('user');
  }
}
