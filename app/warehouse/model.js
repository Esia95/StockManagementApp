import Model, { attr } from '@ember-data/model';
// import moment from 'moment';

export default class WarehouseModel extends Model {
  @attr('string') articles;
  @attr('string') count;
  @attr('string') target;
  @attr('string') unit;
  @attr('string') price;
  @attr('string') invoice;
  @attr('string') date;
}
