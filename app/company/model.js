import Model, { attr, hasMany } from '@ember-data/model';

export default class CompanyModel extends Model {
  @attr('string') name;
  @hasMany('orders', { autoSave: true }) orders;
}
