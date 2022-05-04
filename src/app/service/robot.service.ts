import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class RobotService {

  constructor(private http: HttpClient) { }
  // here we have to implement a logic that we have to fetch all robots and show it in the UI but when we comeback to this screen we have to show all robots and select the robot that user already selected
  getrobots(){
    return this.http.get<any>( `${BASEURL}/admin/robot/get_robots/0`)
  }
}


