import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
import { EnvironmentService } from 'src/app/service/environment.service';
@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.scss']
})
export class EnvironmentComponent implements OnInit {
  imageFileName = '';
  stlFileName = '';
  imageFile?: File;
  stlFile?: File;  
  imageFileName1 = '';
  stlFileName1 = '';
  imageFile1?: File;
  stlFile1?: File;  
  uploadenvmnt=true;
  uploadcad=true;
  selectedEnvFile?: File ;
  selecteBinFile?: File ;
  step1 = true;
  step2 = false;
  downloaddoc= true;
  downloaddoc1= true;
  constructor(public routeService: RouterService,private environmentservice: EnvironmentService) { }

  ngOnInit(): void {
    this.getEnvDetails(0,3)

  }

  getEnvDetails(env_id:any,project_id:any){
    this.environmentservice.getenvironmentdetails(env_id,project_id).subscribe((data:any) => {
      console.log(data)
    })
  }

  closebtn(){
    this.downloaddoc= false;
  }
  closebtn1(){
    this.downloaddoc1= false;
  }
  imagefileupload(event: any) {
    this.imageFileName = event.target.files[0].name;
    this.imageFile = <File>event.target.files[0];
  }
  imagefileupload1(event: any) {
    this.imageFileName1 = event.target.files[0].name;
    this.imageFile1 = <File>event.target.files[0];
  }

  // stlfileupload(event: any) {
  //   this.stlFileName = event.target.files[0].name;
  //   this.stlFile = <File>event.target.files[0];
  // }
  // stlfileupload1(event: any) {
  //   this.stlFileName1 = event.target.files[0].name;
  //   this.stlFile1 = <File>event.target.files[0];
  // }

  // onchangeEnvFile(event:any) {
  //   this.selectedEnvFile = <File>event.target.files[0];    
  // }
  // onchangeBinFile(event:any) {
  //   this.selecteBinFile = <File>event.target.files[0];
  // }
  createEnvironmentData(){
    if(!this.imageFileName || !this.imageFileName1) {
      alert("Please upload both Bin and STL files");
      return;
    }
    const master_environment_data = {
      env_name:"environment",
      env_file:"file need to select",
      bin_name:"bin",
      bin_file:"fille need to select",
      project_id:1
    }

    this.environmentservice.environmentDetails(master_environment_data).subscribe((data:any) => {
      if(data.status==="success")
      this.routeService.movetonextpage('calibration')
    else
    console.log("error occured",data)
  },
  (error:any)=> {
    console.log(error)
  });
  }

}
