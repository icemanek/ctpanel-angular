import { Component, OnInit } from '@angular/core';
import { TimetableConnectionService } from '../connection/timetable-connection.service'
import { Meeting } from './meeting';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {
  
  meetings: Meeting[] = [];

  constructor( private http: HttpClient, private timetableConnectionService: TimetableConnectionService) {}

  ngOnInit(){
    this.getMeetings();
  }
    
  getMeetings(){
    this.timetableConnectionService.getAllMeetings().subscribe((res) =>
    
    this.meetings = res
    )
  }
}