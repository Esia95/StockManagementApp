import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class OrdersRoute extends Route {
  @service store;

  async model(param) {
    return await this.store.findRecord('company', param.id);
  }
}
