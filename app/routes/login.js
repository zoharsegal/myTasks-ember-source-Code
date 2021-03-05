import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel(/* transition */) {
    if (localStorage.getItem('uuid')) {
      this.transitionTo('index');
    }
  }
});
