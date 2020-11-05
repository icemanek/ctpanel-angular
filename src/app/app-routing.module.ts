import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { TimetableComponent } from './timetable/timetable.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import {ArchiveMeetingsComponent} from './archive-meetings/archive-meetings.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MainpageComponent
  },
  {
    path: 'harmonogram',
    component: TimetableComponent
  },
  {
    path: 'meetings',
    component: TopicListComponent
  },
  {
    path: 'archive',
    component: ArchiveMeetingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
