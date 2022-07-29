import Model, { attr, belongsTo } from '@ember-data/model';
export default class OrderModel extends Model {
  @attr('string') article;
  @attr('string') unit;
  @attr('string') note;
  @attr('string') targets;

  @attr('boolean', { defaultValue: false }) isOrdered;

  @attr('number') count;

  @attr('date') createdDate;

  @belongsTo('company', { autoSave: true }) company;

  get isEmptyField() {
    return !(this.article && this.count && this.unit);
  }
}
