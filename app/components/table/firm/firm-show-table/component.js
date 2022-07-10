import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TableFirmFirmShowTableComponent extends Component {
  @service session;
  @service store;

  @action
  onDeleted(table) {
    return table.destroyRecord();
  }
}
