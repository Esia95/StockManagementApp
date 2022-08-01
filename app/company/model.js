import Model, { attr, hasMany } from '@ember-data/model';

export default class CompanyModel extends Model {
  @attr('string') name;
  @attr({
    defaultValue: () => ['articles', 'count', 'targets', 'note', 'createdDate'],
  })
  tableFields;

  @hasMany('orders', { autoSave: true }) orders;
}
