import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  modal: service(),
  store: service(),
  isCreateDialogShow:false,
  didRender() {
    if (this.get('modal').get("isClose")) {
      this.get("modal").set('isClose', false);
      this.set('isCreateDialogShow', false);
    }
  },
  actions: {
    openCreateTaskDialog() {
      this.set('isCreateDialogShow', true);
    },
    refreshParent() {
      alert("refreshed parent!")
    }
  }
});
