import { Component, OnInit } from '@angular/core';
import { TimetableConnectionService } from '../connection/timetable-connection.service';
import { HttpClient } from '@angular/common/http';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit{

  firstMeet: any;

  constructor(private http: HttpClient, private timetableConnectionService: TimetableConnectionService, public auth: AuthService) {}

  ngOnInit(){
    this.getFirstMet();
  }

  getFirstMet(){
    this.timetableConnectionService.getIncomingMeeting().subscribe((res) =>
       {
       this.firstMeet = res;
      });
    }
}
