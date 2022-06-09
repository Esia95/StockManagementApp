import Model, { attr, belongsTo } from '@ember-data/model';

export default class TableModel extends Model {
  @attr('string') name;
  @attr('string') count;
  @attr('string') target;
  @belongsTo('user') owner;
}
