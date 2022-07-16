import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TableWarehouseShowTable extends Component {
  @action
  async onDeleted(order) {
    await order.destroyRecord();
  }
}
