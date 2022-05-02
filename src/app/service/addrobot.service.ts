import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class AddrobotService {

  constructor(private http: HttpClient) { }
  addRobotData(robotData:any){
    return this.http.post<any>(`${BASEURL}/admin/robot/create_robots`,robotData)
  }
}
