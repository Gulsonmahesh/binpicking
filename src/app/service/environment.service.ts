import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor(private http: HttpClient) { }
  getenvironmentdetails(){
    return this.http.get<any>(`${BASEURL}/master_environment/0/19`)
  }
  environmentDetails(master_environment_data:any){
    return this.http.post<any>(`${BASEURL}/master_environment`,master_environment_data)
  }
}
