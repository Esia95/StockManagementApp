import Model, { attr } from '@ember-data/model';

export default class SelleoModel extends Model {
  @attr('string') articles;
  @attr('string') count;
  @attr('string') unit;
  @attr('string') target;
  @attr('string') note;
}
