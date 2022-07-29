import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  async beforeModel() {
    const isDatabaseFilled = localStorage.length;

    if (isDatabaseFilled) {
      return;
    }

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
    });
    await selleoModel.save();

    const bluecrestModel = this.store.createRecord('company', {
      id: 2,
      name: 'BLUECREST',
    });
    await bluecrestModel.save();

    const firmModel = this.store.createRecord('company', {
      id: 3,
      name: 'NA FIRME',
    });
    await firmModel.save();

    const order1 = this.store.createRecord('order', {
      article: 'Płyn',
      count: '4',
      unit: 'op',
      targets: 'HQ',
      note: '',
      createdDate: new Date('21-05-2022'),
      company: selleoModel,
    });
    await order1.save();

    const order2 = this.store.createRecord('order', {
      article: 'Papier',
      count: '7',
      unit: 'op',
      targets: '',
      note: 'sdaaad',
      createdDate: new Date('11-07-2022'),
      company: bluecrestModel,
    });
    await order2.save();

    const order3 = this.store.createRecord('order', {
      article: 'Szmatki',
      count: '2',
      unit: 'szt',
      targets: 'HQ, Przbyły',
      note: 'ddfssd',
      company: firmModel,
      createdDate: new Date('06-06-2022'),
    });
    await order3.save();
  }
}
