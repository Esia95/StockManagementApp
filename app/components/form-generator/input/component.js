import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';

export default class MswordGeneratorComponenet extends Component {
  constructor() {
    super(...arguments);
    this.guidFor = guidFor(this);
  }

  get id() {
    return `${this.args.label.toLowerCase()}-${this.guidFor}`;
  }

  get type() {
    return this.args.type || 'text';
  }

  @action
  onChange({ target: { value } }) {
    this.args.onChange(value, ...arguments);
  }
}
