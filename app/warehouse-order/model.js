import Model, { attr } from '@ember-data/model';
// import moment from 'moment';

export default class WarehouseOrderModel extends Model {
  @attr('string') article;
  @attr('string') unit;
  @attr('string') price;
  @attr('string') invoice;

  @attr('number') count;

  @attr('date') invoiceDate;
}
