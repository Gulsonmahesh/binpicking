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
  imageFile?: any;
  stlFile?: any;
  imageFileName1 = '';
  stlFileName1 = '';
  imageFile1?: any;
  stlFile1?: any;
  uploadenvmnt=true;
  uploadcad=true;
  selectedEnvFile?: any ;
  selecteBinFile?: any ;
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
    const project_id =sessionStorage.getItem("project_id")
    let newobjectData:FormData = new FormData();
    newobjectData.append('env_name', "environment");
    newobjectData.append('env_file', this.imageFile);
    newobjectData.append('bin_name', "bin");
    newobjectData.append('bin_file', this.imageFile1);
    newobjectData.append('project_id', JSON.stringify(project_id));
    this.step1 = false;
    this.step2 = true;

    this.environmentservice.environmentDetails(newobjectData).subscribe((data:any) => {
      if(data.status==="success")
        this.routeService.movetonextpage('calibration')
      else
        console.log("error occured",data)
      },(error:any)=> {
      console.log(error)
    });
  }

}
