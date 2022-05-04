import { Component, HostListener, OnInit, ViewChild,ElementRef, Input  } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
import { RobotService } from 'src/app/service/robot.service';
import { RobotDetailsComponent } from '../../common/robot-details/robot-details.component';

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.scss']
})
export class RobotComponent implements OnInit {
  
  isAdmin = false;
  showRobotModel = false;
  deleteModel = false;
  showGripperModel = false;
  selectedRobot: any = null;
  showDeleteGripperModel = false;

  @HostListener('document:keyup', ['$event']) closeModel(event: KeyboardEvent) {
    if(this.showRobotModel && event.key == 'Escape') {
      this.showRobotModel = false;
    }
    if(this.deleteModel && event.key == 'Escape') {
      this.deleteModel = false;
    }
    if(this.showGripperModel && event.key == 'Escape') {
      this.showGripperModel = false;
    }
  }
  
  constructor(public routeService: RouterService,private robotservice: RobotService) { }
  
  robotDetails = [
    {
      robotimg: 'assets/robot.webp', manufacturename: 'Universal Robot',model: 'UR56',
      robotname: 'UR5', reach: '1.3M', payload: '10Kg', selected: false, id:1
    },
    {
      robotimg: 'assets/robot.webp', manufacturename: 'Universal Robot', model: 'UR56',
      robotname: 'UR5', reach: '1.3M', payload: '10Kg', selected: false, id:2
    },
    {
      robotimg: 'assets/robot.webp', manufacturename: 'Universal Robot', model: 'UR56',
      robotname: 'UR5', reach: '1.3M', payload: '10Kg', selected: false, id:3
    },
    {
      robotimg: 'assets/robot.webp', manufacturename: 'Universal Robot', model: 'UR56',
      robotname: 'UR5', reach: '1.3M', payload: '10Kg', selected: false, id:4
    },
    {
      robotimg: 'assets/robot.webp', manufacturename: 'Universal Robot', model: 'UR56',
      robotname: 'UR5', reach: '1.3M', payload: '10Kg', selected: false, id:5
    }
  ];

  
  ngOnInit(): void {
    this.robotservice.getrobots().subscribe((data:any) => {
      // this.robotDetails=data;
      console.log(this.robotDetails)
    })

    this.isAdmin= sessionStorage.getItem('isAdmin') === 'true' ? true: false;
  }

  showModel(modelStatus: boolean = false) {
    this.showRobotModel = modelStatus;
  }
  showGripper(modelStatus: boolean = false) {
    this.showGripperModel = modelStatus;
  }

  createRobot(event: any) {
    console.log(event);
  }

  openDeleteModel(status: boolean) {
    this.deleteModel = status;
  }

  onselectedRobot(event: any) {
    console.log(event.id)
    this.selectedRobot = event;    
  }

  openDeleteRobot() {
    this.showDeleteGripperModel = true;
  }
  onDeleteConfirm() {
    this.robotDetails = this.robotDetails.filter((robot: any) => robot.id !== this.selectedRobot.id);    
    this.showDeleteGripperModel = false;
  }

}

