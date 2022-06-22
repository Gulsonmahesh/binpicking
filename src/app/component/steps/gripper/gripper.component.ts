import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
import { GripperService } from 'src/app/service/gripper.service';

@Component({
  selector: 'app-gripper',
  templateUrl: './gripper.component.html',
  styleUrls: ['./gripper.component.scss']
})
export class GripperComponent implements OnInit {
  showdetails = true;
  isAdmin = false;
  selectedGripper: any = null;
  @Output() buttonSelected =  new EventEmitter();
  model = false;
  showGrippertcp = false;
  showDeleteGripperModel = false;
  isEdit = false;
  buttonDisabled = false;


  gripperDetails: any = [
    // {image: 'assets/robot.webp', name:'Parallel Finger Gripper' , selected: false, id:1},
    // {image: 'assets/robot.webp', name:'Vaccum Gripper' , selected: false, id:2},
    // {image: 'assets/robot.webp', name:'Vaccum Gripper' , selected: false, id:3},
    // {image: 'assets/robot.webp', name:'Vaccum Gripper' , selected: false, id:4},
    // {image: 'assets/robot.webp', name:'Vaccum Gripper' , selected: false, id:5},
    // {image: 'assets/robot.webp', name:'Vaccum Gripper' , selected: false, id:6}

  ];
  showGripperModel = false;

  constructor(public routeService: RouterService,private gripperservice: GripperService) { }

  ngOnInit(): void {
    this.isAdmin = sessionStorage.getItem('isAdmin') === 'true' ? true: false;
    if(this.isAdmin===true){
      this.gripperservice.getadmingrippers().subscribe((data:any) => {
        this.gripperDetails = data;
        console.log(data)

      })
    }
    else{
      this.gripperservice.getgrippers().subscribe((data:any) => {
        this.gripperDetails = data;
        console.log(data)

      })

    }
    

  }
 
  openAddGripperModal() {
    this.buttonSelected.emit(true);
    this.showGripperModel = true;
  }

  showGripper(modelStatus: boolean = false) {
    if(!modelStatus) {
      this.isEdit = false;
    }
    this.showGripperModel = modelStatus;
  }

  createRobot(event: any) {
    console.log(event);
    this.showGripperModel = false;
    this.showGrippertcp = false;    
  }

  onSelectGripper(gripper: any) {
    console.log(gripper)
    this.showDeleteGripperModel = false;
    this.selectedGripper = gripper;
  }

  deleteRobot() {
    if(this.selectedGripper === null) {
      alert("Please select a gripper");
      return;
    }
    this.showDeleteGripperModel = true;
  }

  onDeleteConfirm() {
    this.gripperDetails = this.gripperDetails.filter((gripper: any) => gripper.id !== this.selectedGripper.id)
    this.selectedGripper = null;
    this.showDeleteGripperModel = false
  }

  gotogrippertcp() {
    // if(this.buttonDisabled) {
    //   this.routeService.movetonextpage('robot')
    //   return;
    // }
    this.showGrippertcp = true;
  }
  movetoGripper() {
    this.buttonDisabled = true;
    this.showGrippertcp = false;
  }
  movetogrippertcp() {
    console.log(this.selectedGripper)
    if(this.selectedGripper === null) {
      alert("Please select a gripper");
      return;
    }
    const gripper_data = {"admin_gripper_id":this.selectedGripper.id,"admin_robot_id":sessionStorage.getItem("selected_robot_id"),"project_id":5,"tcp_list":this.selectedGripper.tcp_list,"invariance_axis":this.selectedGripper.invariance_axis,
    "invariance_lower_limit":this.selectedGripper.invariance_lower_limit,"invariance_upper_limit":this.selectedGripper.invariance_upper_limit,"stages_number":this.selectedGripper.stages_number,"invariance_flag":this.selectedGripper.invariance_flag}
    console.log("gripper_data",this.selectedGripper)
    this.gripperservice.createrobotgripper(gripper_data).subscribe((data:any)=>{
      console.log("data",data)
      this.routeService.movetonextpage('object')
    })

    // this.gotogrippertcp();
  }
  addGripper() {
    // this.selectedGripper=null;
    this.isEdit = false;
    this.showGripperModel = true;
  }
  onclickgripper(){
    alert("hii")
    this.showdetails=true;
  }

  editGripper() {
    if(this.selectedGripper === null) {
      alert("Please select a gripper");
      return;
    }
    console.log(this.selectedGripper);
    this.isEdit = true;
    this.showGripperModel = true;
  }

  updateGripperTCP() {
    if(this.isAdmin) {
      this.showGrippertcp = false;
      this.buttonDisabled = true;
    } else {
      this.showGrippertcp = false;
      // this.routeService.movetonextpage('object')
    }
  }
}

