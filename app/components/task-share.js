import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  modal: service(),
  store: service(),
  actions: {
    closeShareTaskDialog() {
      this.get("modal").set('isClose', true);
      this.rerender();
    },
  }
});
