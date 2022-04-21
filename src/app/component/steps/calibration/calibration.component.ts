import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
import { CalibrationService } from 'src/app/service/calibration.service';
@Component({
  selector: 'app-calibration',
  templateUrl: './calibration.component.html',
  styleUrls: ['./calibration.component.scss']
})
export class CalibrationComponent implements OnInit {

  constructor(public routeService: RouterService,private calibrationService:CalibrationService) { }

  ngOnInit(): void {
  }
  numSequence(n: number): Array<number> {
    return Array(n);
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
