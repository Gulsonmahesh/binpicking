import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  steps: any = [];
  usersteps = [
    {value: 'project-details', title:'Project Details', number: '1',checked: false},
    {value: 'robot', title: 'Robot', number: '2',checked: false},
    {value: 'gripper', title: 'Gripper', number: '3',checked: false},
    {value: 'grippertcp', title: 'Gripper TCP', number: '4',checked: false},
    {value: 'object', title: 'Object', number: '5',checked: false},
    {value: 'grippingpoints', title: 'Gripping Points', number: '6',checked: false},
    {value: 'environment', title: 'Environment', number: '7',checked: false},
    {value: 'calibration', title: 'Calibration', number: '8',checked: false},
    {value: 'deploy', title: 'Deploy', number: '9',checked: false},
    {value: 'executebin', title: 'Execute Bin Picking', number: '10',checked: false}
  ];

  adminsteps = [
    {value: 'gripper', title: 'Gripper', number: '3',checked: false},
    {value: 'robot', title: 'Robot', number: '2',checked: false},
    {value: 'grippertcp', title: 'Gripper TCP', number: '4',checked: false},
  ];
  currentRoute = '';

  constructor(private router: Router) {
    console.log(this.router);
  }
  // checked: boolean = false;
  public activeElement = 1;

  public selectedItem() {
      // this.checked= true;
  }
  @Input() showsidebar = true;
  ngOnInit(): void {
    const isAdmin = sessionStorage.getItem('isAdmin');
    this.currentRoute = this.router.url.replace('/', '');
    console.log(this.currentRoute);
    this.steps= isAdmin === 'true' ? this.adminsteps : this.usersteps;
  }

}
