// import Component from '@glimmer/component';
// import { action } from '@ember/object';

// export default class SharedInputComponenet extends Component {
//   @action
//   onChange({ target: { value } }) {
//     this.args.onChange(value, ...arguments);
//   }
// }
import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SharedInputComponenet extends Component {
  get type() {
    return this.args.type || 'input';
  }

  get chceckInputType() {
    return this.args.type || 'text';
  }

  get size() {
    const { size } = this.args;
    const isCorrectSize = ['sm', 'md', 'lg'].includes(size);
    return isCorrectSize ? `form-control-${size}` : '';
  }

  @action
  onClick() {
    this.args.onClick?.(...arguments);
  }
}
