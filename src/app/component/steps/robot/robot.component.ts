import { Component, HostListener, OnInit, ViewChild,ElementRef, Input  } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
import { RobotService } from 'src/app/service/robot.service';
import { RobotDetailsComponent } from '../../common/robot-details/robot-details.component';
import { GRIPPERS } from "../../../constant";
import { GripperType }   from "../../../types/apptypes"

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
  showSelectGripper = false;
  grippers = GRIPPERS;
  robotId: any;
  isEdit = false;
  selectedGripperId: any;
  selectedGripper: any = null;

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
      robotname: 'UR5', reach: '1.3', payload: '10', selected: false, id:1
    },
    {
      robotimg: 'assets/robot.webp', manufacturename: 'Universal Robot', model: 'UR56',
      robotname: 'UR5', reach: '1.3', payload: '10', selected: false, id:2
    },
    {
      robotimg: 'assets/robot.webp', manufacturename: 'Universal Robot', model: 'UR56',
      robotname: 'UR5', reach: '1.3', payload: '10', selected: false, id:3
    },
    {
      robotimg: 'assets/robot.webp', manufacturename: 'Universal Robot', model: 'UR56',
      robotname: 'UR5', reach: '1.3', payload: '10', selected: false, id:4
    },
    {
      robotimg: 'assets/robot.webp', manufacturename: 'Universal Robot', model: 'UR56',
      robotname: 'UR5', reach: '1.3', payload: '10', selected: false, id:5
    }
  ];


  ngOnInit(): void {
    this.selectedGripperId = this.grippers[0].id
    this.robotId = this.robotDetails && this.robotDetails.length+1 || 1;
    this.robotservice.getrobots().subscribe((data:any) => {
      // this.robotDetails=data;
      // this.robotId = this.robotDetails && this.robotDetails.length || 1;
      console.log(this.robotDetails)
    })

    this.isAdmin= sessionStorage.getItem('isAdmin') === 'true' ? true: false;
  }

  showModel(modelStatus: boolean = false) {
    this.isEdit = false;
    this.showRobotModel = modelStatus;
  }
  showGripper(modelStatus: boolean = false) {
    this.showGripperModel = modelStatus;
  }

  editRobot() {
    console.log(this.selectedRobot);
    if(this.selectedRobot === null) {
      alert('Select a Robot');
      return
    }
    this.isEdit = true;
    this.showRobotModel =true;
  }

  createRobot(event: any) {
    console.log(event);
    // event[0] will give u the form values and event[1] will give true if Edit form false for for add form
    // this.selectedRobot = event[0];
    // this.showRobotModel = false;
  }
  openGripper(robotDetails: any = null){
    console.log(robotDetails)
    this.selectedRobot = robotDetails;
    this.showGripperModel = true;
  }

  openDeleteModel(status: boolean) {
    this.deleteModel = status;
  }

  onselectedRobot(event: any) {
    console.log(event.id)
    this.selectedRobot = event;
  }

  openDeleteRobot() {
    if(this.selectedRobot === null) {
      alert('Select a Robot');
      return
    }
    this.showDeleteGripperModel = true;
  }
  onDeleteConfirm() {
    this.robotDetails = this.robotDetails.filter((robot: any) => robot.id !== this.selectedRobot.id);
    this.showDeleteGripperModel = false;
    this.selectedRobot = null;
  }
  onGripperConfirm() {
    this.showSelectGripper = false;
    if(this.isEdit) {
      console.log(this.isEdit, this.selectedRobot.robotId, this.selectedGripperId)
    } else {
      console.log(this.isEdit, this.robotId, this.selectedGripperId)
    }
  }

  gotoGripper() {
    if(this.selectedRobot === null || this.selectedRobot === undefined || this.selectedRobot === false) {
      alert('Please Select a Robot');
      return
    }
    this.routeService.movetonextpage('gripper')
  }
  updateSelectedGripper(gripper: GripperType) {
    this.selectedGripper = gripper;
  }
  gotorobot() {
    if(!this.selectedGripper) {
      alert('please select a gripper');
      return;
    }
    this.showGripperModel=false;
  }
}
