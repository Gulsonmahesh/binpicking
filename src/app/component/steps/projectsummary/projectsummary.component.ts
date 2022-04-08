import { Component,Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatRow } from '@angular/material/table';
import { RouterService } from '../../../service/router.service';

@Component({
  selector: 'app-projectsummary',
  templateUrl: './projectsummary.component.html',
  styleUrls: ['./projectsummary.component.scss']
})
export class ProjectsummaryComponent implements OnInit {
  displayedColumns = ['id', 'name', 'progress', 'status', 'action'];
  dataSource: any = null;

  @ViewChild(MatPaginator) paginator ? : MatPaginator;
  @ViewChild(MatSort) sort ?: MatSort;

  constructor(public routerService: RouterService) { 
    
  }
 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: KeyboardEvent) {
    // filterValue = filterValue.trim(); // Remove whitespace
    // filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngOnInit(): void {
        // Create 100 users
        const users: UserData[] = [];
        for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }
    
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
  }

}


/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
 


  return {
    id: id.toString(),
    name: name,
    progress: PROGRESS[Math.round(Math.random() * (PROGRESS.length - 1))],
    status: STATUS[Math.round(Math.random() * (STATUS.length - 1))],
    action: ACTION[Math.round(Math.random() * (ACTION.length - 1))],
  };
}

/** Constants used to fill up our data base. */
const STATUS = ['Ready for Deployment', 'Configuration Incomplete', 'Configuration Incomplete', 'Configuration Incomplete', 'Configuration Incomplete', 'Configuration Incomplete', 'Configuration Incomplete',
  'Configuration Incomplete', 'Configuration Incomplete', 'Configuration Incomplete', 'Configuration Incomplete', 'Configuration Incomplete', 'Configuration Incomplete', 'Configuration Incomplete', 'Configuration Incomplete'];
const NAMES = ['Project robotics calibrations with one gripper 1', 'Project robotics calibrations with one gripper 1', 'Project robotics calibrations with one gripper 1', 'Project robotics calibrations with one gripper 1', 'Project robotics calibrations with one gripper 1', 'Project robotics calibrations with one gripper 1',
  'Project robotics calibrations with one gripper 1', 'Project robotics calibrations with one gripper 1', 'Project robotics calibrations with one gripper 1', 'Project robotics calibrations with one gripper 1', 'Project robotics calibrations with one gripper 1', 'Project robotics calibrations with one gripper 1',
  'Project robotics calibrations with one gripper 1', 'Project robotics calibrations with one gripper 1', 'Project robotics calibrations with one gripper 1', 'Project robotics calibrations with one gripper 1', 'Project robotics calibrations with one gripper 1', 'Project robotics calibrations with one gripper 1', 'Project robotics calibrations with one gripper 1'];
const PROGRESS = ['Ready for Deployment', 'Configuration Incomplete', 'Configuration Incomplete', 'Configuration Incomplete', 'Configuration Incomplete', 'Configuration Incomplete', 'Configuration Incomplete',
  'Configuration Incomplete', 'Configuration Incomplete', 'Configuration Incomplete', 'Configuration Incomplete', 'Configuration Incomplete', 'Configuration Incomplete', 'Configuration Incomplete', 'Configuration Incomplete'];
const ACTION = ['Deploy'];
export interface UserData {
  id: string;
  name: string;
  progress: string;
  status: string;
  action: string;
}

