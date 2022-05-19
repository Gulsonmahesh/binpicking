import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class GrippingposeService {

  constructor(private http: HttpClient) { }
  PoseDetails(pose_details:any){
    return this.http.post<any>(`${BASEURL}/poses`,pose_details)
  }
  editPoseDetails(editedposedata:any){
    return this.http.put<any>(`${BASEURL}/poses/editpose/1`,editedposedata)
  }
  deletePoseDetails(poseId:any){
    return this.http.delete<any>(`${BASEURL}/poses/deletepose/`+poseId)
  }
  enablePoseDetails(enableposedata:any){
    return this.http.put<any>(`${BASEURL}/poses/enablepose`,enableposedata)
  }
}
