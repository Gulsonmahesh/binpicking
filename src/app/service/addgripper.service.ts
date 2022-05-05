import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class AddgripperService {

  constructor(private http: HttpClient) { }
  addGripperData(gripperData:any){
    return this.http.post<any>(`${BASEURL}/admin/gripper/create_grippers`,gripperData)
  }

  editGripperData(gripperData: any){
    return this.http.put<any>(`${BASEURL}/admin/gripper/edit_grippers`,gripperData)
  }

  deleteGripperData(gripper_id: any){
    return this.http.delete<any>(`${BASEURL}/admin/gripper/delete_grippers/`+gripper_id)
  }
}
