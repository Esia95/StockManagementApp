import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TableWarehouseShowTableModal extends Component {
  @service store;

  get shouldDisabledButton() {
    return !this.args.order.hasDirtyAttributes;
  }

  @action
  onPropertyChange(propName, { target: { value } }) {
    this.args.order[propName] = value;
  }

  @action
  async onSave() {
    await this.args.order.save();
    this.args.onClose();
  }

  @action
  onClose() {
    this.args.order.rollbackAttributes();
    this.args.onClose();
  }
}
