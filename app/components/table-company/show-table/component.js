import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
// import moment from 'moment';

export default class TableCompanyShowTableComponent extends Component {
  @tracked date = '';
  @service store;
  @tracked isShowModal = false;
  @tracked selectedOrderToEdit;

  @action
  async onDateOrdered(order) {
    order.createdDate = new Date();
    await order.save();
  }

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
