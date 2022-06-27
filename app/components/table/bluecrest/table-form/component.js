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
  onNameChange(event) {
    this.articles = event.target.value;
    console.log(this.articles);
  }

  @action
  onCountChange(event) {
    this.count = event.target.value;
    console.log(this.count);
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
    'Mydło do rąk',
    'Odświeżacz powietrza',
    'Papier toaletowy',
    'Płyn do mycia naczyń',
    'Ręczniki papierowe',
    'Sól do zmywarki',
    'Tabletki do zmywarki',
    'Worki 60l',
    'Worki 25',
    'Zapach w płynie',
  ];
}
