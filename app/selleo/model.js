import Model, { attr, belongsTo } from '@ember-data/model';

export default class SelleoModel extends Model {
  @attr('string') articles;
  @attr('string') count;
  @attr('string') target;

  @belongsTo('user') owner;
}
