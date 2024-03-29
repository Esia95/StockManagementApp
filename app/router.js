/* eslint-disable ember/no-shadow-route-definition */
import EmberRouter from '@ember/routing/router';
import config from 'stock-management-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' }, function () {
    this.route('order-list', { path: 'order-list/:id' });
    this.route('orders');
    this.route('warehouse');
    this.route('archive');
  });
  this.route('login');
  this.route('register');
});
