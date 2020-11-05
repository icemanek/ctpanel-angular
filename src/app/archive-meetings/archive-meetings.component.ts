import {Component, OnInit, ViewChild} from '@angular/core';
import {TimetableConnectionService} from '../connection/timetable-connection.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';


const ELEMENT_DATA: TimetableConnectionService[] = [];

@Component({
  selector: 'app-archive-meetings',
  templateUrl: './archive-meetings.component.html',
  styleUrls: ['../topic-list/topic-list.component.scss', './archive-meetings.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ArchiveMeetingsComponent implements OnInit {

  displayedColumns: string[] = [
    'topic',
    'description',
    'userAdded',
    'addedDate',
    'tags',
    'voting'
  ];

  expandedElement: TimetableConnectionService | null;

  constructor(private timetableConnectionService: TimetableConnectionService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit() {
    this.timetableConnectionService.getArchiveMeetings().subscribe((res) => {
      // @ts-ignore
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

}
