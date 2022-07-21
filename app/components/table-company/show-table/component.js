import Component from '@glimmer/component';
import { action } from '@ember/object';
// import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
// import moment from 'moment';

export default class TableCompanyShowTableComponent extends Component {
  // @tracked date = '';
  @service store;

  @action
  async onDateOrdered(order) {
    // let date = moment().format('DD-MM-YYYY');
    order.createdDate = new Date();
    await order.save();
  }

  @action
  async onDeleted(order) {
    await order.destroyRecord();
  }
}
