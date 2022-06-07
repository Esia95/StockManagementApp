import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('number') number;
  @attr('string') name;
  @attr('number') count;
  @attr('string') type;
  @attr('string') target;
}
