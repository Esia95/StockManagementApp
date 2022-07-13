import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EditShowController extends Controller {
  @service store;
  @service router;

  get shouldDisabledButton() {
    return !this.model.hasDirtyAttributes;
  }

  @action
  discardChanges() {
    this.model.rollbackAttributes();
    this.router.transitionTo('home.bluecrest');
  }

  @action
  onCountChange(event) {
    this.model.count = event.target.value;
  }

  @action
  async onSave() {
    this.model.save();
    this.router.transitionTo('home.bluecrest');
  }
}
