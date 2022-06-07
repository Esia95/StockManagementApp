import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
//import { action } from '@ember/object';

export default class RowComponent extends Component {
  @tracked row = [
    {
      name: 'Płyn',
      count: '2',
      target: 'Przybyły',
    },
  ];
}
