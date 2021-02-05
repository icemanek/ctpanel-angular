import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moje',
  templateUrl: './moje.component.html',
  styleUrls: ['./moje.component.scss']
})
export class MojeComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
