import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.scss']
})
export class RobotComponent implements OnInit {
  showTip = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
