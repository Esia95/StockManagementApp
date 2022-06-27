import Model, { attr, belongsTo } from '@ember-data/model';

export default class BluecrestModel extends Model {
  @attr('string') articles;
  @attr('string') count;

  @belongsTo('user') owner;
}
