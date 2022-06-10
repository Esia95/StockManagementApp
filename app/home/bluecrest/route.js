import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BluecrestRoute extends Route {
  @service store;

  model() {
    const tables = this.store.findAll('bluecrest');
    return tables;
  }
}
