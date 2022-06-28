import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TableTableFormComponent extends Component {
  @action
  onDeleted(table) {
    return table.destroyRecord();
  }
}
