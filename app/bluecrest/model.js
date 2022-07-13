import Model, { attr } from '@ember-data/model';

export default class BluecrestModel extends Model {
  @attr('string') articles;
  @attr('string') count;
  @attr('string') unit;
}
