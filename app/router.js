import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login', { path: '/login' });
  this.route('logout', { path: '/logout' });
  this.route('register', { path: '/register' });
  this.route('task', { path: '/tasks' });
});

export default Router;
