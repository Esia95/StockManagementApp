import Component from '@glimmer/component';
import { action } from '@ember/object';
// import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class TableWarehouseShowTable extends Component {
  @tracked isShowModal = false;
  @tracked selectedOrderToEdit;

  @action
  async onDeleted(order) {
    await order.destroyRecord();
  }

  @action
  onShowModal(order) {
    this.selectedOrderToEdit = order;
    this.isShowModal = true;
  }

  @action
  onHideModal() {
    this.isShowModal = false;
  }
}
