import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TimetableConnectionService {

  constructor(private http: HttpClient, private toasterService: ToastrService) {}

  getAllMeetings(): Observable<object>{
    return this.http.get('http://localhost:3001/meetings/sorted')
    .pipe(
      catchError((err) => {
        this.toasterService.error(err.message);
        return throwError(err);
      })
    );
  }

  getIncomingMeeting(){
    return this.http.get('http://localhost:3001/meetings/incoming')
    .pipe(
      catchError((err) => {
        this.toasterService.error(err.message);
        return throwError(err);
      })
    );
  }

  getAllTopics(): Observable<object>{
    return this.http.get('http://localhost:3001/topics')
    .pipe(
      catchError((err) => {
        this.toasterService.error(err.message);
        return throwError(err);
      })
    );
  }

  getArchiveMeetings(){
    return this.http.get('http://localhost:3001/meetings/archive')
    .pipe(
      catchError((err) => {
        this.toasterService.error(err.message);
        return throwError(err);
      })
    );
  }
}
