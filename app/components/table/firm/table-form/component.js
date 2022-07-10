import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class TableFormComponent extends Component {
  @service store;
  @tracked selected = '';
  @tracked number = '';
  @tracked chosen = '';
  @tracked piece = '';
  @tracked note = '';

  get isEmptyField() {
    return !(this.selected && this.number && this.piece && this.chosen);
  }

  @action
  onNoteChange(event) {
    this.note = event.target.value;
  }

  @action
  async onSave() {
    const order = {
      articles: this.selected,
      count: this.number,
      target: this.chosen,
      unit: this.piece,
      note: this.note,
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
    this.note = '';
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

  unit = [' szt', ' op'];

  target = [' Bluecrest', ' HQ', ' Przybyły'];
}
