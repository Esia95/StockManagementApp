import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class TableBluecrestBluecrestFormComponent extends Component {
  @service store;
  @tracked name = '';
  @tracked count = '';

  get isEmptyField() {
    return !(this.name && this.count);
  }

  @action
  onNameChange(event) {
    this.name = event.target.value;
    console.log(this.name);
  }

  @action
  onCountChange(event) {
    this.count = event.target.value;
    console.log(this.count);
  }

  @action
  async onSave() {
    const order = {
      name: this.name,
      count: this.count,
    };

    const stockModel = this.store.createRecord('bluecrest', order);
    await stockModel.save();
    this.clear();
  }
  @action
  clear() {
    this.name = '';
    this.count = '';
  }
}
