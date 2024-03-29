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
      tableFields: ['articles', 'count', 'createdDate'],
    });
    await bluecrestModel.save();

    const firmModel = this.store.createRecord('company', {
      id: 3,
      name: 'NA FIRMĘ',
    });
    await firmModel.save();

    const poloModel = this.store.createRecord('company', {
      id: 4,
      name: 'POLO',
      tableFields: ['articles', 'count', 'createdDate'],
    });
    await poloModel.save();

    const trekModel = this.store.createRecord('company', {
      id: 5,
      name: 'TREK',
      tableFields: ['articles', 'count', 'createdDate'],
    });
    await trekModel.save();

    const softkraftModel = this.store.createRecord('company', {
      id: 6,
      name: 'SOFTKRAFT',
      tableFields: ['articles', 'count', 'createdDate'],
    });
    await softkraftModel.save();

    const lawFirmModel = this.store.createRecord('company', {
      id: 7,
      name: 'KANCELARIA',
      tableFields: ['articles', 'count', 'createdDate'],
    });
    await lawFirmModel.save();

    const flatsModel = this.store.createRecord('company', {
      id: 8,
      name: 'MIESZKANIA',
      tableFields: ['articles', 'count', 'createdDate'],
    });
    await flatsModel.save();

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

    const order4 = this.store.createRecord('order', {
      article: 'Szmatki',
      count: '5',
      unit: 'szt',
      company: poloModel,
      createdDate: new Date('06-06-2022'),
    });
    await order4.save();

    const order5 = this.store.createRecord('order', {
      article: 'Szmatki',
      count: '2',
      unit: 'szt',
      company: trekModel,
      createdDate: new Date('06-06-2022'),
    });
    await order5.save();

    const order6 = this.store.createRecord('order', {
      article: 'Szmatki',
      count: '2',
      unit: 'szt',
      company: softkraftModel,
      createdDate: new Date('06-07-2022'),
    });
    await order6.save();

    const order7 = this.store.createRecord('order', {
      article: 'Płyn',
      count: '4',
      unit: 'op',
      targets: 'HQ',
      note: '',
      createdDate: new Date('21-05-2022'),
      company: lawFirmModel,
    });
    await order7.save();

    const order8 = this.store.createRecord('order', {
      article: 'Płyn',
      count: '4',
      unit: 'op',
      targets: 'HQ',
      note: '',
      createdDate: new Date('21-05-2022'),
      company: flatsModel,
    });
    await order8.save();
  }
}
