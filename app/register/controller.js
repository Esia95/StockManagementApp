import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RegisterController extends Controller {
  @service store;
  @service router;

  @action
  onPropertyChange(key, value) {
    this.model[key] = value;
  }

  @action
  async onSubmit(event) {
    event.preventDefault();
    await this.model.save();
    this.router.transitionTo('login');
  }
}
