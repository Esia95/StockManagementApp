import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') name;
  @attr('string') count;
  @attr('string') target;
}
