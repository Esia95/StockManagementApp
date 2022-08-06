import Component from '@glimmer/component';
import { action } from '@ember/object';
export default class ArchiveComponent extends Component {
  get archivedOrders() {
    return this.args.orders.filter(({ isArchived }) => isArchived);
  }

  @action
  async onDeleted(order) {
    await order.destroyRecord();
  }
}
