import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SelleoRoute extends Route {
  @service store;

  model() {
    const tables = this.store.findAll('selleo');
    return tables;
  }
}
