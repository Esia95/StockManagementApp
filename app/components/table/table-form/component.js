import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class TableTableFormComponent extends Component {
  @service store;
  @tracked name = '';
  @tracked count = '';
  @tracked target = '';

  get isEmptyField() {
    return !(this.name, this.count, this.target);
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
  onTargetChange(event) {
    this.target = event.target.value;
    console.log(this.target);
  }

  @action
  async onSave() {
    const order = {
      name: this.name,
      count: this.count,
      target: this.target,
    };

    const stockModel = this.store.createRecord('table', order);
    await stockModel.save();
    this.clear();
  }
  @action
  clear() {
    this.name = '';
    this.count = '';
    this.target = '';
  }
}
