import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class TableTableFormComponent extends Component {
  @service store;
  @tracked selected = '';
  @tracked count = '';
  @tracked number = '';
  @tracked target = '';
  @tracked chosen = '';
  @tracked piece = '';

  get isEmptyField() {
    return !(this.selected && this.number && this.piece && this.chosen);
  }

  @action
  onCountChange(event) {
    this.count = event.target.value;
  }

  @action
  async onSave() {
    const order = {
      articles: this.selected,
      count: this.number,
      target: this.chosen,
      unit: this.piece,
    };

    const stockModel = this.store.createRecord('table', order);
    await stockModel.save();
    this.clear();
  }
  @action
  clear() {
    this.selected = '';
    this.number = '';
    this.chosen = '';
    this.piece = '';
  }

  articles = [
    'Płyn uniwersalny',
    'Płyn do czyszczenia toalet',
    'Płyn do podłóg',
    'Płyn do szyb',
    'Rękawiczki',
    'Szmatki fioletowe Vileda',
    'Szmatki żółte Vileda',
  ];

  count = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  unit = ['szt', 'op'];

  target = [' Bluecrest', ' HQ', ' Przybyły'];
}
