import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from "@angular/material/table";
import { TimetableConnectionService } from '../connection/timetable-connection.service';

const ELEMENT_DATA: TimetableConnectionService[] = [];

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {

  displayedColumns: string[] = [
    "topic",
    "userAdded",
    "addedDate",
    "votes"
  ];
  constructor(private timetableConnectionService: TimetableConnectionService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit() {
    this.timetableConnectionService.getAllTopics().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res.results);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
}
