import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalibrationService {

  constructor(private http: HttpClient) { }
  saveCalibrationData(calibration_details:any){
    return this.http.post<any>("http://127.0.0.1:8000/save_robot_calibration",calibration_details)
  }
}
