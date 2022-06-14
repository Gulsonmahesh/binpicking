import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import  { UpdatesidebarService } from '../../service/updatesidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  steps: any = [];
  usersteps = [
    {value: 'project-details', title:'Project Details', number: '1',checked: false, status: 'completed'},
    {value: 'robot', title: 'Robot', number: '2',checked: false, status: 'notyet'},
    {value: 'gripper', title: 'Gripper', number: '3',checked: false, status: 'notyet'},
    // {value: 'grippertcp', title: 'Gripper TCP', number: '4',checked: false, status: 'notyet'},
    {value: 'object', title: 'Object', number: '4',checked: false, status: 'notyet'},
    {value: 'grippingpoints', title: 'Gripping Points', number: '5',checked: false, status: 'notyet'},
    {value: 'environment', title: 'Environment', number: '6',checked: false, status: 'notyet'},
    {value: 'calibration', title: 'Calibration', number: '7',checked: false, status: 'notyet'},
    {value: 'deploy', title: 'Deploy', number: '8',checked: false, status: 'notyet'},
    {value: 'executebin', title: 'Execute Bin Picking', number: '9',checked: false, status: 'notyet'}
  ];

  adminsteps = [
    {value: 'gripper', title: 'Gripper', number: '1',checked: false},
    {value: 'robot', title: 'Robot', number: '2',checked: false},
    // {value: 'grippertcp', title: 'Gripper TCP', number: '4',checked: false},
  ];
  currentRoute = '';
  sidebar$?: any;

  constructor(private router: Router, private sidebarService: UpdatesidebarService) {
    console.log(this.router);
  }
  // checked: boolean = false;
  public activeElement = 1;

  public selectedItem() {
      // this.checked= true;
  }
  @Input() showsidebar = true;
  ngOnInit(): void {
    this.sidebarService.getSidebarStatus().subscribe((data:any) => 
    {
      this.sidebar$ = data;
      console.log(this.sidebar$);
    });    
    const isAdmin = sessionStorage.getItem('isAdmin');
    this.currentRoute = this.router.url.replace('/', '');
    console.log(this.currentRoute);
    this.steps= isAdmin === 'true' ? this.adminsteps : this.usersteps;
  }

}
