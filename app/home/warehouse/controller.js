import Controller from '@ember/controller';

export default class HomeWarehouseController extends Controller {
  get warehouseOrders() {
    return this.model.filter((order) => !order.isNew);
  }

  get orders() {
    return this.store.findRecord('warehouse-order');
  }
}
