import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  steps = [
    {value: 'project-details', title:'Project Details'},
    {value: 'robot', title: 'Robot'},
    {value: 'gripper', title: 'Gripper'},
    {value: 'grippertcp', title: 'Gripper TCP'},
    {value: 'object', title: 'Object'},
    {value: 'grippingpoints', title: 'Gripping Points'},
    {value: 'environment', title: 'Environment'},
    {value: 'calibration', title: 'Calibration'},
    {value: 'deploy', title: 'Deploy'},
    {value: 'executebin', title: 'Execute Bin Picking'}
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.steps);
    
  }

}
