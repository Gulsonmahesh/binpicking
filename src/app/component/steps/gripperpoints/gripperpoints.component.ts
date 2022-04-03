import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gripperpoints',
  templateUrl: './gripperpoints.component.html',
  styleUrls: ['./gripperpoints.component.scss']
})
export class GripperpointsComponent implements OnInit {
  model = false;
  constructor() { }

  ngOnInit(): void {
  }

  showModel(event: any) {
    this.model = event;
  }
}
