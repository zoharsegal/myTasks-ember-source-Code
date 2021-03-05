import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  modal: service(),
  store: service(),
  actions: {
    createTask(taskName) {
      var _this=this
      let task = this.get('store').createRecord('task', {
        taskName: taskName,
      });
      task.save().then(function() {
        _this.get('store').findAll('userdata')
      })
      .catch(function() {
        alert("Error!")
      });
    },
    closeCreateTaskDialog() {
      this.get("modal").set('isClose', true);
      this.rerender();
    },
  }
});
