import Model, { attr, belongsTo } from '@ember-data/model';

export default class WarehouseModel extends Model {
  @attr('string') articles;
  @attr('string') count;
  @attr('string') target;
  @attr('string') unit;

  @belongsTo('user') owner;
}
