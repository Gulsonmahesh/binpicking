import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
import { GrippertcpService } from 'src/app/service/grippertcp.service';
import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-grippertcp',
  templateUrl: './grippertcp.component.html',
  styleUrls: ['./grippertcp.component.scss']
})
export class GrippertcpComponent implements OnInit {
  xdegValue?: any;
  ydegValue?: any;
  zdegValue?: any;
  xAxis?: any=null;
  yAxis?: any=null;
  zAxis?: any=null;
  isShown: boolean = false ; 
  xValue?:any;
  yValue?:any;
  zValue?:any;
  xDegree?:any=0;
  yDegree?:any=0;
  zDegree?:any=0;

  constructor(public routeService: RouterService,private grippertcpservice: GrippertcpService) { }

  ngOnInit(): void {
    this.grippertcpservice.getgripper().subscribe((data:any) => {
      console.log(data)
  })

  }

  toggleShow() {
    this.isShown = ! this.isShown;    
  }


gripperTcpData(){
  // const grippertcpdata = {admin_robot_id:1,
  //   admin_gripper_id:1,project_id:0,tcp_list:[1,2,3,4,5,6],invariance_axis:"False",invariance_lower_limit:0,invariance_upper_limit:0,stages_number:0,invariance_flag:"False"}
  const grippertcpdata = {admin_robot_id:1,
    admin_gripper_id:1,project_id:1,tcp_list:[this.xValue,this.yValue,this.zValue,this.xdegValue,this.ydegValue,this.zdegValue],invariance_axis:"False",invariance_lower_limit:this.xDegree,invariance_upper_limit:this.yDegree,stages_number:this.zDegree,invariance_flag:"False"}
  this.grippertcpservice.gripperTcpDetails(grippertcpdata).subscribe((data:any) => {
    if(data.status==="success")
    this.routeService.movetonextpage('object')
    else
    console.log("error occured",data)
  },
  (error:any)=> {
    console.log(error)
  });
}

}

