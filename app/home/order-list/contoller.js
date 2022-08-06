import Controller from '@ember/controller';

export default class OrderListController extends Controller {
  get orderIsArchived() {
    return this.orders.filter((order) => !order.isArchived);
  }

  get orders() {
    return this.store.findRecord('order');
  }
}
