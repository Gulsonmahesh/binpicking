import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../constant';
@Injectable({
  providedIn: 'root'
})
export class GrippertcpService {

  constructor(private http: HttpClient) { }
  getgripper(){
    return this.http.get<any>( `${BASEURL}/get_admin_grippers/1`)
  }
  gripperTcpDetails(grippertcpdata:any){
    return this.http.post<any>(`${BASEURL}/gripper_tcp`,grippertcpdata)
  }
}
