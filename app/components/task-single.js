import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  modal: service(),
  user: service(),
  store: service(),
  isShareDialogShow:false,
  didRender() {
    if (this.get('modal').get("isClose")) {
      this.get("modal").set('isClose', false);
      this.set('isShareDialogShow', false);
    }
  },
  actions: {
    markDoneOrNot(e) {
      var _this=this
      this.get('store').findRecord('task', e.target.name).then(function(task) {
        var __this=_this
        task.isDone = (e.target.checked==true ? 1 : 0);
        task.save()
          .then(function() {
            __this.get('store').findAll('userdata')
          })
          .catch(function() {
            alert("Error!")
          });
      });
    },
    deleteTask(id) {
      let task = this.get('store').peekRecord('task', id);
      task.deleteRecord();
      task.isDeleted; // => true
      var _this=this
      task.save().then(function() {
        _this.get('store').findAll('userdata')
      })
        .catch(function() {
          alert("Error!")
        });
    },
    shareTask(isOwner) {
      if (isOwner) {
        this.set('isShareDialogShow', true);
        this.rerender()
      }
    }
  }
});
