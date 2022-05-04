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
  }

  showModel(event: any) {
    this.model = event;
  }

  poseData(){
    const pose_details = {pose_list:[1,2,3,4,5,6],display_image_data:"image has to upload",invariance_axis:"False",invariance_lower_limit:0,invariance_upper_limit:0,stages_number:0,invariance_flag:"False",invariance_x_position:0,invariance_y_position:0,invariance_z_position:0,object_id:3}
    this.grippingposeService.PoseDetails(pose_details).subscribe((data:any) => {
      console.log(data)
      this.routeService.movetonextpage('object')
  });
}
}
