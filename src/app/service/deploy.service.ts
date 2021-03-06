import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BASEURL } from '../constant';
@Injectable({
  providedIn: 'root'
})
export class DeployService {

  constructor(private http: HttpClient) { }

  deployProject(project_id:any){
    return this.http.post<any>(`${BASEURL}/user/projects/execute_bin_picking`,project_id)
  }
  getScannerConnect = (robot_ip: any) => {
    return this.http.post<any>(`${BASEURL}/user/projects/robots/robot_connectivity`,{"robot_ip":robot_ip})
  }

  getRobotConnect = (robot_ip: any) => {
    return this.http.post<any>(`${BASEURL}/user/projects/robots/robot_connectivity`,{"robot_ip":robot_ip})
  }

}
