import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class TableWarehouseTableFormComponent extends Component {
  @service store;

  @tracked selectedCount = '';
  @tracked selectedArticle = '';
  @tracked selectedUnit = '';
  @tracked price = '';
  @tracked invoiceDate = '';
  @tracked invoice = '';

  get isEmptyField() {
    return !(
      this.selectedArticle &&
      this.selectedCount &&
      this.selectedUnit &&
      this.price &&
      this.invoice
    );
  }

  @action
  onPriceChange(event) {
    this.price = event.target.value;
  }

  @action
  onInvoiceChange(event) {
    this.invoice = event.target.value;
  }

  @action
  onStartDateChange(date) {
    this.invoiceDate = date;
  }

  @action
  async onSave() {
    const order = {
      article: this.selectedArticle,
      count: this.selectedCount,
      unit: this.selectedUnit,
      price: this.price,
      invoiceDate: this.invoiceDate,
    };

    const stockModel = this.store.createRecord('warehouse-order', order);
    await stockModel.save();
    this.clear();
  }
  @action
  clear() {
    this.selectedArticle = '';
    this.selectedCount = '';
    this.selectedUnit = '';
    this.price = '';
    this.invoiceDate = '';
    this.invoice = '';
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

  count = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
  ];

  unit = ['szt', 'op'];

  target = ['Bluecrest', 'HQ', 'Przybyły', ' Karbowa'];
}
