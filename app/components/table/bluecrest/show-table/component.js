import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
// import { inject as service } from '@ember/service';
import moment from 'moment';

export default class TableBluecrestShowTable extends Component {
  @tracked date = '';

  @action
  async onChangeDate(bluecrest) {
    const date = moment().format('DD-MM-YYYY');
    bluecrest.ordered = date;
    await bluecrest.save();
  }

  @action
  async onDeleted(bluecrest) {
    await bluecrest.destroyRecord();
  }
}
