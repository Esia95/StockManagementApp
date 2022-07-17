import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { articles, count, unit } from 'stock-management-app/utils/form-helpers';

export default class TableWarehouseTableFormComponent extends Component {
  @service store;
  @tracked stockModel;

  count = count;
  unit = unit;

  constructor() {
    super(...arguments);
    this.#createEmptyWarehouseOrderModel();
  }

  willDestroy() {
    super.willDestroy(...arguments);
    if (this.stockModel.isNew) {
      this.stockModel.unloadRecord();
    }
  }

  get articles() {
    return articles.filter(({ target }) => target.includes('warehouse'));
  }

  get selectedArticle() {
    return this.articles.find(
      (article) => article.name === this.stockModel.article
    );
  }

  @action
  onChangeArticle(article) {
    this.stockModel.article = article.name;
  }

  @action
  onPropertyChange(propName, { target: { value } }) {
    this.stockModel[propName] = value;
  }

  @action
  async onSave() {
    await this.stockModel.save();
    this.#createEmptyWarehouseOrderModel();
  }

  @action
  async clear() {
    await this.stockModel.destroyRecord();
    this.#createEmptyWarehouseOrderModel();
  }

  #createEmptyWarehouseOrderModel() {
    this.stockModel = this.store.createRecord('warehouse-order');
  }
}
