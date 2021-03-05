import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  user: service(),
  store: service(),
  actions: {
    shareTaskWithUser(taskId,userId) {
      this.get('store').findRecord('task', taskId).then(function(task) {
        let newShares=[]
        for(var i = 0; i < task.get("shares").length; i++)
        {
          if(task.get("shares")[i].userId == userId)
          {
            let isShared = (task.get("shares")[i].isShared==1 ? 0 : 1)
            newShares.push({userId:task.get("shares")[i].userId,userName:task.get("shares")[i].userName,isShared:isShared})
          } else {
            newShares.push(task.get("shares")[i])
          }
        }
        task.shares=newShares

        task.save()
          .then(function() {
          })
          .catch(function() {
          });
      });
    },
  }
});
