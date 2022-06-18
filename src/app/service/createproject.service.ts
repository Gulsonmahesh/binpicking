import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class CreateprojectService {

  constructor(private http: HttpClient) { }

  getproject_id(){
    return this.http.get<any>(`${BASEURL}/last_project_id`)
  }
  saveProjectDetails(project_details:any){
    return this.http.post<any>(`${BASEURL}/projects`,project_details)
  }  
}
