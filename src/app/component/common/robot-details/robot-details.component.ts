import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-robot-details',
  templateUrl: './robot-details.component.html',
  styleUrls: ['./robot-details.component.scss']
})
export class RobotDetailsComponent implements OnInit {

  constructor() { }
  @Input() details? = {};

  ngOnInit(): void {
  }

}
