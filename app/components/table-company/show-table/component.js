import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class TableCompanyShowTableComponent extends Component {
  @service store;
  @tracked isShowModal = false;
  @tracked selectedOrderToEdit;
  @tracked isArchived = false;

  get isActiveOrders() {
    return this.args.company.orders.filter(({ isArchived }) => !isArchived);
  }

  @action
  async onDateOrdered(order) {
    order.createdDate = new Date();
    order.isOrdered = true;
    await order.save();
  }

  @action
  async onArchive(order) {
    order.isArchived = true;
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
