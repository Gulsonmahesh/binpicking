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
    const robot_id=sessionStorage.getItem("selected_robot_id")
    return this.http.get<any>(`${BASEURL}/user/projects/robots/grippers_with_robot_id/${robot_id}/0`)
  }
  getadmingrippers(){
    return this.http.get<any>(`${BASEURL}/admin/gripper/get_grippers/0`)
  }
  createrobotgripper(gripper_data:any){
    return this.http.post<any>(`${BASEURL}/user/projects/gripper/gripper_tcp`,gripper_data)
  }

}
