import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
import { CalibrationService } from 'src/app/service/calibration.service';
// import { AnyPtrRecord } from 'dns';



@Component({
  selector: 'app-calibration',
  templateUrl: './calibration.component.html',
  styleUrls: ['./calibration.component.scss']
})
export class CalibrationComponent implements OnInit {
  hero = {name: 'Dr.', name2: 'sir', name3: 'sir',name4:'sir',  name5: 'sir', name6: 'sir', name7: 'sir',name8:'sir',name9: 'sir', name10: 'sir', name11: 'sir',name12:'sir'};
  myform:any;
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
