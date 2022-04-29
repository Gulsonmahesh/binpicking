import { Component, HostListener, OnInit, ViewChild,ElementRef  } from '@angular/core';
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
  
  robotDetails? = [
    // {
    //   robotimg: 'assets/robot.webp', manufacturename: 'Universal Robot',model: 'UR56',
    //   robotname: 'UR5', reach: '1.3M', payload: '10Kg', selected: false
    // },
    // {
    //   robotimg: 'assets/robot.webp', manufacturename: 'Universal Robot', model: 'UR56',
    //   robotname: 'UR5', reach: '1.3M', payload: '10Kg', selected: false
    // },
    // {
    //   robotimg: 'assets/robot.webp', manufacturename: 'Universal Robot', model: 'UR56',
    //   robotname: 'UR5', reach: '1.3M', payload: '10Kg', selected: false
    // },
    // {
    //   robotimg: 'assets/robot.webp', manufacturename: 'Universal Robot', model: 'UR56',
    //   robotname: 'UR5', reach: '1.3M', payload: '10Kg', selected: false
    // },
    // {
    //   robotimg: 'assets/robot.webp', manufacturename: 'Universal Robot', model: 'UR56',
    //   robotname: 'UR5', reach: '1.3M', payload: '10Kg', selected: false
    // }
  ];

  
  ngOnInit(): void {
    this.robotservice.getrobots().subscribe((data:any) => {
      this.robotDetails=data;
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

}

