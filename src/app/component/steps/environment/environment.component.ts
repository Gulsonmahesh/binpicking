import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
import { EnvironmentService } from 'src/app/service/environment.service';
@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.scss']
})
export class EnvironmentComponent implements OnInit {

  uploadenvmnt=true;
  uploadcad=true;
  selectedEnvFile?: File ;
  selecteBinFile?: File ;
  step1 = true;
  step2 = false;

  constructor(public routeService: RouterService,private environmentservice: EnvironmentService) { }

  ngOnInit(): void {
    this.environmentservice.getenvironmentdetails().subscribe((data:any) => {
      console.log(data)
    })
  }

  onchangeEnvFile(event:any) {
    this.selectedEnvFile = <File>event.target.files[0];    
  }
  onchangeBinFile(event:any) {
    this.selecteBinFile = <File>event.target.files[0];
  }
  environmentPageData(){
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
