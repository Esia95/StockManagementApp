/* eslint-disable ember/no-shadow-route-definition */
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
    this.route('bluecrests', function () {
      this.route('modal', { path: '/:id' });
    });
    this.route('firms', function () {
      this.route('modal', { path: '/:id' });
    });

    this.route('selleos', function () {
      this.route('modal', { path: '/:id' });
    });
    this.route('warehouses', function () {
      this.route('modal', { path: '/:id' });
    });
  });
  this.route('login');
  this.route('register');
});
