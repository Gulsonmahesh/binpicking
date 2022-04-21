import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateprojectService {

  constructor(private http: HttpClient) { }

  getproject_id(){
    return this.http.get<any>("http://127.0.0.1:8000/last_project_id")
  }
  saveProjectDetails(project_details:any){
    return this.http.post<any>("http://127.0.0.1:8000/projects",project_details)
  }
}
