import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import {
  articles,
  count,
  unit,
  targets,
} from 'stock-management-app/utils/form-helpers';

export default class TableCompanyTableFormComponent extends Component {
  @service store;
  @tracked ordersModel;

  count = count;
  unit = unit;
  targets = targets;

  constructor() {
    super(...arguments);
    this.#createEmptyCompanyOrderModel();
  }

  willDestroy() {
    super.willDestroy(...arguments);
    if (this.ordersModel.isNew) {
      this.ordersModel.unloadRecord();
    }
  }

  get articles() {
    return articles.filter(({ target }) => target.includes('warehouse'));
  }

  get selectedArticle() {
    return this.articles.find(
      (article) => article.name === this.ordersModel.article
    );
  }

  @action
  onChangeArticle(article) {
    this.ordersModel.article = article.name;
  }

  @action
  onPropertyChange(key, value) {
    this.ordersModel[key] = value;
  }

  @action
  async onSave() {
    this.ordersModel.company = this.args.company;
    await this.ordersModel.save();
    this.#createEmptyCompanyOrderModel();
  }

  @action
  async clear() {
    await this.ordersModel.destroyRecord();
    this.#createEmptyCompanyOrderModel();
  }

  #createEmptyCompanyOrderModel() {
    this.ordersModel = this.store.createRecord('order');
  }
}
