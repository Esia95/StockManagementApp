import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SharedInputComponenet extends Component {
  @action
  onChange({ target: { value } }) {
    this.args.onChange(value, ...arguments);
  }
}
