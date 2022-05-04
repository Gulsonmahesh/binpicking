import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class GripperService {

  constructor(private http: HttpClient) { }
  // here we have to implement a logic that we have to fetch all grippers and show it in the UI but when we comeback to this screen we have to show all grippers and select the gripper that user already selected
  getgrippers(){
    return this.http.get<any>(`${BASEURL}/grippers_with_robot_id/1/0`)
  }
}
