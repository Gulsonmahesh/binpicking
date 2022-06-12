import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
import { CalibrationService } from 'src/app/service/calibration.service';
// import { AnyPtrRecord } from 'dns';


export class Student {
  public name: any;
  public name1: any;
  public name2: any;
  public name3: any;
}
@Component({
  selector: 'app-calibration',
  templateUrl: './calibration.component.html',
  styleUrls: ['./calibration.component.scss']
})
export class CalibrationComponent implements OnInit {
  myform:any;
  model = new Student();
  @ViewChild('f') form: any;

  Subjects: string[] = [
    'Science',
    'Math',
    'Physics',
    'Finance'
  ];
  constructor(public routeService: RouterService,private calibrationService:CalibrationService) { }

  submit(data:any) {
    console.log(data.value)
  }

  ngOnInit(): void {
  }
  numSequence(n: number): Array<number> {
    return Array(n);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      this.form.reset();
    }
  }
  

  calibrationData(){
    const calibration_details = {calibration_data:[[0,0,0,0],[1,2,3,4],[2,3,4,5],[6,7,8,9]],project_id:1}
    this.calibrationService.saveCalibrationData(calibration_details).subscribe((data:any) => {
      if(data.status==="success")
      this.routeService.movetonextpage('deploy')
    else
    console.log("error occured",data)
  },
  (error:any)=> {
    console.log(error)
  });
  }

}
