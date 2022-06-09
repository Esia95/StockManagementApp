import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TableRoute extends Route {
  @service store;

  model() {
    const table = this.store.findAll('table');
    return table;
  }
}
