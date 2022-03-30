import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  
  steps = [
    {value: 'project-details', title:'Project Details', number: '1'},
    {value: 'robot', title: 'Robot', number: '2'},
    {value: 'gripper', title: 'Gripper', number: '3'},
    {value: 'grippertcp', title: 'Gripper TCP', number: '4'},
    {value: 'object', title: 'Object', number: '5'},
    {value: 'grippingpoints', title: 'Gripping Points', number: '6'},
    {value: 'environment', title: 'Environment', number: '7'},
    {value: 'calibration', title: 'Calibration', number: '8'},
    {value: 'deploy', title: 'Deploy', number: '9'},
    {value: 'executebin', title: 'Execute Bin Picking', number: '10'}
  ];

  constructor() { 
   
  }
  checked: boolean = false;
  public activeElement = 1;  
 
  public selectedItem() {
      // this.activeElement = id;
      this.checked= true;
   }
  ngOnInit(): void {
    console.log(this.steps);
    
  }
  
}
