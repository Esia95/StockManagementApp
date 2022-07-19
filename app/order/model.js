import Model, { attr, hasMany } from '@ember-data/model';

export default class OrderModel extends Model {
  @attr('string') article;
  @attr('string') unit;
  @attr('string') note;
  @attr('string') target;

  @attr('number') count;

  @attr('date') createdDate;

  @hasMany('company') companies;
}
