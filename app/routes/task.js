import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { set } from '@ember/object';

export default Route.extend({
  beforeModel() {
    if (!localStorage.getItem('uuid')) {
      this.transitionTo('login');
    }
  },
  model() {
    return hash({
      tasks: this.store.findAll('task'),
      userdata: this.store.findAll('userdata')
    });
  },
  setupController(controller, model) {
    this._super(...arguments);
    set(controller, 'tasks', model.tasks);
    set(controller, 'userdata', model.userdata);
  },
  actions:{
    refreshCurrentRoute(){
      this.refresh();
    }
  }
});

