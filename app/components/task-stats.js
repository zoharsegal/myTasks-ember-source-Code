import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  totalDone:0,
  totalUnDone:0,
  totalTasks:0,
  // didRender() {
  //   this.get('store').findAll('userdata')
  //   .then(userdata => {
  //     let tmpUserData=userdata.content[0].__data
  //     this.set('totalDone', tmpUserData.totalDone);
  //     this.set('totalUnDone', tmpUserData.totalUnDone);
  //     this.set('totalTasks', tmpUserData.totalTasks);
  //   })
  //   .catch(error => {
  //   });
  //   // console.log(userData)
  //
  // },
});
