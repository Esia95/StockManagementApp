import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  async beforeModel() {
    const user1 = {
      id: 1,
      username: 'admin',
      password: 'admin123',
      email: 'admin@admin.com',
      isAdmin: true,
    };
    const user2 = {
      id: 2,
      username: 'user',
      password: 'user',
      email: 'user@user.com',
    };

    const user1Model = this.store.createRecord('user', user1);
    const user2Model = this.store.createRecord('user', user2);

    await user1Model.save();
    await user2Model.save();

    const selleoModel = this.store.createRecord('company', {
      id: 1,
      name: 'SELLEO',
      orders: [],
    });
    await selleoModel.save();

    const bluecrestModel = this.store.createRecord('company', {
      id: 2,
      name: 'BLUECRESTS',
      orders: [],
    });
    await bluecrestModel.save();

    const firmModel = this.store.createRecord('company', {
      id: 3,
      name: 'NA FIRME',
      orders: [],
    });
    await firmModel.save();
  }
}
