import Model, { attr, belongsTo } from '@ember-data/model';

export default class TableModel extends Model {
  @attr('string') articles;
  @attr('string') count;
  @attr('string') target;

  @belongsTo('user') owner;
}
