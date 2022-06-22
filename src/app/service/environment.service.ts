import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor(private http: HttpClient) { }
  getenvironmentdetails(env_id:any,project_id:any){
    return this.http.get<any>(`${BASEURL}/user/projects/master_environment/`+env_id+'/'+project_id)
  }
  environmentDetails(master_environment_data:any){
    return this.http.post<any>(`${BASEURL}/user/projects/environment/create_master_environment`,master_environment_data)
  }
}
