import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TimetableConnectionService } from '../connection/timetable-connection.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

const ELEMENT_DATA: TimetableConnectionService[] = [];

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TopicListComponent implements OnInit {
  clicked = false;

  displayedColumns: string[] = [
    'topic',
    'description',
    'userAdded',
    'addedDate',
    'tags',
    'votes',
    'voting'
  ];

  expandedElement: TimetableConnectionService | null;

  constructor(private timetableConnectionService: TimetableConnectionService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit() {
    this.timetableConnectionService.getAllTopics().subscribe((res) => {
      // @ts-ignore
      this.dataSource = new MatTableDataSource(res.results);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
}
