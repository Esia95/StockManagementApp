import EmberRouter from '@ember/routing/router';
import config from 'stock-management-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' }, function () {
    this.route('orders');
    this.route('warehouse');
    this.route('firm');
    this.route('selleo');
    this.route('bluecrest');
    this.route('edit', function () {
      this.route('bluecrest', { path: '/:id' });
      // this.route('selleo', { path: '/:id' });
      // eslint-disable-next-line ember/no-shadow-route-definition
      this.route('firm', { path: '/:id' });
      // this.route('warehouse', { path: '/:id' });
    });
  });
  this.route('login');
  this.route('register');
});
