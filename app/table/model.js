import Model, { attr } from '@ember-data/model';

export default class TableModel extends Model {
  @attr('string') articles;
  @attr('string') count;
  @attr('string') target;
  @attr('string') unit;
  @attr('string') note;
}
