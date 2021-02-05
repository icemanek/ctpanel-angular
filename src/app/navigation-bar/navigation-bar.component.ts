import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {AuthService} from '@auth0/auth0-angular';
import {faSignInAlt, faSignOutAlt, faUser, faHistory, faDatabase, faCalendarAlt, faHome} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  faUser = faUser;
  faSignOutAlt = faSignOutAlt;
  faSignInAlt = faSignInAlt;
  faHistory = faHistory;
  faDatabase = faDatabase;
  faCalendarAlt = faCalendarAlt;
  faHome = faHome;

  constructor(private breakpointObserver: BreakpointObserver, public auth: AuthService) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

}
