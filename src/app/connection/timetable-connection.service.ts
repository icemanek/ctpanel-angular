import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, timeout } from "rxjs/operators";
import { Meeting } from '../timetable/meeting'

@Injectable({
  providedIn: 'root'
})
export class TimetableConnectionService {

  constructor(private http: HttpClient) {}

  getAllMeetings(): Observable<any>{
    return this.http.get("http://localhost:3001/meetings/sorted")
    .pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  
  getIncomingMeeting(){
    return this.http.get("http://localhost:3001/meetings/incoming")
    .pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  getAllTopics(): Observable<any>{
    return this.http.get("http://localhost:3001/topics")
    .pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  getArchiveMeetings(){
    return this.http.get("http://localhost:3001/meetings/archive")
    .pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
