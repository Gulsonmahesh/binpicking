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
}
