import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
import { GripperService } from 'src/app/service/gripper.service';

@Component({
  selector: 'app-gripper',
  templateUrl: './gripper.component.html',
  styleUrls: ['./gripper.component.scss']
})
export class GripperComponent implements OnInit {

  isAdmin = false;
  selectedGripper: any = null;
  @Output() buttonSelected =  new EventEmitter();
  model = false;
  showGrippertcp = false;
  showDeleteGripperModel = false;

  gripperDetails: any = [
    {image: 'assets/robot.webp', name:'Parallel Finger Gripper' , selected: false, id:1}, 
    {image: 'assets/robot.webp', name:'Vaccum Gripper' , selected: false, id:2},
    {image: 'assets/robot.webp', name:'Vaccum Gripper' , selected: false, id:3},
    {image: 'assets/robot.webp', name:'Vaccum Gripper' , selected: false, id:4},
    {image: 'assets/robot.webp', name:'Vaccum Gripper' , selected: false, id:5},
    {image: 'assets/robot.webp', name:'Vaccum Gripper' , selected: false, id:6}

  ];
  showGripperModel = false;

  constructor(public routeService: RouterService,private gripperservice: GripperService) { }

  ngOnInit(): void {
    this.gripperservice.getgrippers().subscribe((data:any) => {
      // this.gripperDetails = data;
      console.log(data)
    })

    this.isAdmin= sessionStorage.getItem('isAdmin') === 'true' ? true: false;
  }
  openAddGripperModal() {
    // this.buttonSelected.emit(true);
    this.showGripperModel = true;
  }

  showGripper(modelStatus: boolean = false) {
    this.showGripperModel = modelStatus;
  }

  createRobot(event: any) {
    console.log(event);
    this.showGripperModel = false;
    this.showGrippertcp = true;
  }

  onSelectGripper(gripper: any) {
    console.log(gripper)
    this.showDeleteGripperModel = false;
    this.selectedGripper = gripper;
  }

  deleteRobot() {
    this.showDeleteGripperModel = true;
  }

  onDeleteConfirm() {
    console.log(this.selectedGripper.id)
    this.gripperDetails = this.gripperDetails.filter((gripper: any) => gripper.id !== this.selectedGripper.id)
    this.selectedGripper = null;
    this.showDeleteGripperModel = false
  }

  gotogrippertcp() {
    this.showGrippertcp = true;
  }

}

