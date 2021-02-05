import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { TimetableComponent } from './timetable/timetable.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import {ArchiveMeetingsComponent} from './archive-meetings/archive-meetings.component';
import {AuthGuard} from '@auth0/auth0-angular';
import {AccountDetailsComponent} from './account-details/account-details.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FlexTestComponent} from './flex-test/flex-test.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
    // canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: MainpageComponent,
    pathMatch: 'full'
  },
  {
    path: 'harmonogram',
    pathMatch: 'full',
    component: TimetableComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'meetings',
    pathMatch: 'full',
    component: TopicListComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'archive',
    pathMatch: 'full',
    component: ArchiveMeetingsComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'account',
    pathMatch: 'full',
    component: AccountDetailsComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'flex',
    component: FlexTestComponent
  },
  {
    path: 'not-found',
    pathMatch: 'full',
    component: PageNotFoundComponent
  },
  {path: '**', redirectTo: '/not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
