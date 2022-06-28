import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class TableBluecrestBluecrestFormComponent extends Component {
  @service store;
  @tracked selected = '';
  @tracked count = '';

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
    };

    const stockModel = this.store.createRecord('bluecrest', order);
    await stockModel.save();
    this.clear();
  }
  @action
  clear() {
    this.selected = '';
    this.count = '';
  }

  articles = [
    'Domestos',
    'Gąbki do mycia naczyń',
    'Krążki żelowe',
    'Mydło do rąk',
    'Nabłyszczacz do zmywarki',
    'Odświeżacz powietrza',
    'Papier toaletowy',
    'Płyn do mycia naczyń',
    'Ręczniki papierowe',
    'Sól do zmywarki',
    'Tabletki do zmywarki',
    'Worki 60l',
    'Worki 25l',
    'Zapach w płynie',
  ];
}
