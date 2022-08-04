import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ArchiveRoute extends Route {
  @service store;

  async model() {
    return await this.store.findAll('order');
  }
}
