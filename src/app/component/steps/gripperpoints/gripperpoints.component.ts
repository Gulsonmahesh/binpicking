import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
import { GrippingposeService } from 'src/app/service/grippingpose.service';
@Component({
  selector: 'app-gripperpoints',
  templateUrl: './gripperpoints.component.html',
  styleUrls: ['./gripperpoints.component.scss']
})
export class GripperpointsComponent implements OnInit {
  model = false;
  constructor(public routeService: RouterService,private grippingposeService: GrippingposeService) { }

  ngOnInit(): void {
    this.getPoseDetails(3,"objects")
  }

  getPoseDetails(pose_id:any,scope:any){
    this.grippingposeService.getposes(pose_id,scope).subscribe((pose_data:any) => {
      console.log("pose_data",pose_data)
    })
  }

  showModel(event: any) {
    this.model = event;
  }

  createposeData(){
    const pose_details = {pose_list:[1,2,3,4,5,6],display_image_data:"image has to upload",invariance_axis:"False",invariance_lower_limit:0,invariance_upper_limit:0,stages_number:0,invariance_flag:"False",invariance_x_position:0,invariance_y_position:0,invariance_z_position:0,object_id:2}
    this.grippingposeService.PoseDetails(pose_details).subscribe((data:any) => {
      console.log(data)
      this.routeService.movetonextpage('object')
  });
}


editPose(){
  const pose_details = {pose_id:1,pose_list:[1,2,3,4,5,6],display_image_data:"image has to upload",invariance_axis:"False",invariance_lower_limit:0,invariance_upper_limit:0,stages_number:0,invariance_flag:"False",invariance_x_position:0,invariance_y_position:0,invariance_z_position:0,object_id:2}
    this.grippingposeService.editPoseDetails(pose_details).subscribe((data:any) => {
      console.log(data)
      this.routeService.movetonextpage('object')
  });

}

deletePose(){
  const poseId = 1;
  this.grippingposeService.deletePoseDetails(poseId).subscribe((data:any) => {
    if(data.status==="success") {
      console.log(data)
      // this.routeService.movetonextpage('environment')
    }
    else
    console.log("Error",data)
  },
  (error:any)=> {
    console.log(error)
  });

}

enablePose(){
  const enableposedata = {pose_id:1,enable_flag:"True"}
  this.grippingposeService.enablePoseDetails(enableposedata).subscribe((data:any) => {
    if(data.status==="success") {
      console.log(data)
      // this.routeService.movetonextpage('environment')
    }
    else
    console.log("Error",data)
  },
  (error:any)=> {
    console.log(error)
  });

}

}
