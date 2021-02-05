import {Component, Inject} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ct-panel';

  constructor(public auth: AuthService, @Inject(DOCUMENT) private doc: Document) {}

  login(): void {
    // Call this to redirect the user to the login page
    this.auth.loginWithRedirect();
  }

  logout(): void {
    // Call this to redirect the user to the login page
    this.auth.logout({ returnTo: this.doc.location.origin });
  }
}
