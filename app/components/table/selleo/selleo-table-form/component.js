import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class TableTableFormComponent extends Component {
  @service store;
  @tracked selected = '';
  @tracked count = '';
  @tracked chosen = '';
  @tracked number = '';
  @tracked piece = '';
  @tracked note = '';

  get isEmptyField() {
    return !(this.selected && this.piece && this.number && this.chosen);
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
      unit: this.piece,
      target: this.chosen,
      note: this.note,
    };

    const stockModel = this.store.createRecord('selleo', order);
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
    'Domestos',
    'Filtry do expressu',
    'Gąbki do mycia naczyń',
    'Mydło do rąk',
    'Krążki żelowe',
    'Okamieniacz do expressu',
    'Odświeżacz powietrza',
    'Papier toaletowy',
    'Płyn do czyszczenia spieniaczy',
    'Płyn do czyszczenia zmywarek',
    'Płyn do mycia naczyń',
    'Ręczniki papierowe',
    'Sól do zmywarki',
    'Szmatki do kuchni',
    'Tabletki do zmywarki',
    'Worki 120l',
    'Worki 60l',
    'Worki 25',
    'Worki do odkurzacza',
    'Zapach do prądu',
    'Zapach w płynie',
  ];

  count = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  unit = ['szt', 'op'];

  target = [' HQ', ' Przybyły', ' Karbowa'];
}
