import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TableWarehouseShowTable extends Component {
  @action
  onDeleted(warehouse) {
    return warehouse.destroyRecord();
  }
}
