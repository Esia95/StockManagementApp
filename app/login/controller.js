import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import Auth0Lock from 'auth0-lock';
import ENV from 'stock-management-app/config/environment';

const clientId = ENV.AUTH0_CLIENTID;
const domain = ENV.AUTH0_DOMAIN;

export default class LoginController extends Controller {
  @service store;
  @tracked loginValue;
  @service session;
  @tracked passwordValue;

  @action
  onLoginChange(event) {
    this.loginValue = event.target.value;
  }

  @action
  onPasswordChange(event) {
    this.passwordValue = event.target.value;
  }

  @action
  async onSubmit(event) {
    event.preventDefault();
    const { loginValue, passwordValue } = this;
    await this.session.loginUser(loginValue, passwordValue);
  }

  @action
  async on0AuthLoginOrRegister() {
    const options = { auth: { redirect: false } };
    const lock = new Auth0Lock(clientId, domain, options);
    lock.show({ allowedConnections: ['google-oauth2'] });

    lock.on('authenticated', (authResult) => {
      lock.getUserInfo(authResult.accessToken, async (error, profileResult) => {
        if (error) {
          console.log('error', error);
          return;
        }

        const accessToken = authResult.accessToken;
        const profile = profileResult;

        console.log('success', accessToken, profile);

        await this.session.loginOrRegisterBy0auth(profile);
      });
    });
  }
}
