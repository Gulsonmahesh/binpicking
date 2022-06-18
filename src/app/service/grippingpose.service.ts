import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class GrippingposeService {

  constructor(private http: HttpClient) { }

  getposes(pose_id:any,scope:any){
    return this.http.get<any>(`${BASEURL}/user/projects/objects/poses/`+pose_id+'/'+scope)
  }
  PoseDetails(pose_details:any){
    return this.http.post<any>(`${BASEURL}/user/projects/objects/poses`,pose_details)
  }
  editPoseDetails(editedposedata:any){
    return this.http.put<any>(`${BASEURL}/user/projects/objects/poses/edit_pose/1`,editedposedata)
  }
  deletePoseDetails(poseId:any){
    return this.http.delete<any>(`${BASEURL}/user/projects/objects/poses/delete_pose/`+poseId)
  }
  enablePoseDetails(enableposedata:any){
    return this.http.put<any>(`${BASEURL}/user/projects/objects/poses/enable_pose`,enableposedata)
  }
}
