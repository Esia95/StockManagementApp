import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class TableFirmFirmShowTableComponent extends Component {
  @service session;
  @service store;
  @tracked isShowModal = false;

  get hasEmptyFields() {
    return !this.note;
  }

  @action
  onDeleted(table) {
    return table.destroyRecord();
  }

  @action
  onShowModal() {
    this.isShowModal = true;
  }

  @action
  onHideModal() {
    this.isShowModal = false;
  }

  @action
  onNoteChange(event) {
    this.note = event.target.value;
  }

  @action
  async onSave() {
    const note = {
      note: this.note,
    };
    const noteModel = this.store.createRecord('table', note);
    await noteModel.save();
    this.isShowCreateModal = false;
  }
}
