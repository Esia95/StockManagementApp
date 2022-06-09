import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SelleoRoute extends Route {
  @service store;

  model() {
    const selleo = this.store.findAll('table');
    return selleo;
  }
}
