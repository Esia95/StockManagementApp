import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class TableWarehouseTableFormComponent extends Component {
  @service store;
  @tracked selected = '';
  @tracked count = '';
  @tracked chosen = '';

  get isEmptyField() {
    return !(this.selected && this.count);
  }

  @action
  onCountChange(event) {
    this.count = event.target.value;
  }

  @action
  async onSave() {
    const order = {
      articles: this.selected,
      count: this.count,
      target: this.chosen,
    };

    const stockModel = this.store.createRecord('warehouse', order);
    await stockModel.save();
    this.clear();
  }
  @action
  clear() {
    this.selected = '';
    this.count = '';
    this.chosen = '';
  }

  articles = [
    'Domestos',
    'Filtry do expressu',
    'Gąbki do mycia naczyń',
    'Mydło do rąk',
    'Nablyszczacz do zmywarki',
    'Krążki żelowe',
    'Okamieniacz do expressu',
    'Odświeżacz powietrza',
    'Papier toaletowy',
    'Płyn do czyszczenia spieniaczy',
    'Płyn do czyszczenia zmywarek',
    'Płyn do mycia naczyń',
    'Płyn do czyszczenia toalet',
    'Płyn uniwersalny',
    'Płyn do podłóg',
    'Płyn do szyb',
    'Ręczniki papierowe',
    'Rękawiczki',
    'Sól do zmywarki',
    'Szmatki do kuchni',
    'Szmatki fioletowe Vileda',
    'Szmatki żółte Vileda',
    'Tabletki do zmywarki',
    'Worki 120l',
    'Worki 60l',
    'Worki 25',
    'Worki do odkurzacza',
    'Zapach do prądu',
    'Zapach w płynie',
  ];

  target = ['Bluecrest', 'HQ', 'Przybyły'];
}
