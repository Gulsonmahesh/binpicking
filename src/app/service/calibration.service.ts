import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class CalibrationService {

  constructor(private http: HttpClient) { }
  saveCalibrationData(calibration_details:any){
    return this.http.post<any>(`${BASEURL}/user/projects/calibration/save_robot_calibration`,calibration_details)
  }

  uploadCalibration(calibration_data:any){
    return this.http.post<any>(`${BASEURL}/user/projects/calibration/load_robot_calibration`,calibration_data)
  }
}
