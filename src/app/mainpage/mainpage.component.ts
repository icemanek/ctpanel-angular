import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Meeting } from '../timetable/meeting';
import { TimetableConnectionService } from '../connection/timetable-connection.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit{
 
  firstMeet: any;

  constructor(private breakpointObserver: BreakpointObserver, private http: HttpClient, private timetableConnectionService: TimetableConnectionService) {} 

  ngOnInit(){
    this.getFirstMet();
  }

  getFirstMet(){
    
    this.timetableConnectionService.getIncomingMeeting().subscribe((res) =>
       { 
       this.firstMeet = res
       console.log(res);        
      })
    }

}