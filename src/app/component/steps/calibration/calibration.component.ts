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
  hero = {name: 'Dr.', name2: 'sir', name3: 'sir',name4:'sir',  name5: 'sir', name6: 'sir', name7: 'sir',name8:'sir',name9: 'sir', name10: 'sir', name11: 'sir',name12:'sir',name13: 'sir', name14: 'sir', name15: 'sir',name16:'sir'};
  myform:any;
  imageFile = ''
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

  imagefileupload(event: any) {
    this.imageFile  = event.target.files[0];
    console.log(this.imageFile)
    if(this.imageFile){
      this.uploadTransformation()
    }
  }

  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      this.form.reset();
    }
  }
  

  createCalibrationData(){
    const calibration_details = {calibration_data:[[this.hero.name,this.hero.name2,this.hero.name3,this.hero.name4],[this.hero.name5,this.hero.name6,this.hero.name7,this.hero.name8],[this.hero.name9,this.hero.name10,this.hero.name11,this.hero.name12],[this.hero.name13,this.hero.name14,this.hero.name15,this.hero.name16]],project_id:sessionStorage.getItem("project_id")}
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

  uploadTransformation(){
    let newcalibrationData:FormData = new FormData();
    newcalibrationData.append('loaded_file', this.imageFile);

    const calibrated_data = {
      calibration_file:"file need to select",
    }

    this.calibrationService.uploadCalibration(newcalibrationData).subscribe((data:any) => {
      console.log(data)
      this.hero = {name: data.file_data[0][0], name2: data.file_data[0][1], name3: data.file_data[0][2],name4:data.file_data[0][3],
          name5: data.file_data[1][0], name6: data.file_data[1][1], name7: data.file_data[1][2],name8:data.file_data[1][3],
          name9: data.file_data[2][0], name10: data.file_data[2][1], name11: data.file_data[2][2],name12:data.file_data[2][3],
          name13: data.file_data[3][0], name14: data.file_data[3][1], name15: data.file_data[3][2],name16:data.file_data[3][3]};
    });
  }
}
