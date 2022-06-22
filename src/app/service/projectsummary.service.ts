import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../constant';

@Injectable({
  providedIn: 'root'
})

export class ProjectsummaryService {

  constructor(private http: HttpClient) { }

  searchProject = (projectId: any) => {
    return this.http.get<any>(`${BASEURL}/projects/${projectId}`)
  }
  getprojects(){
    this.http.get<any>(`${BASEURL}/user/projects/0`)
  }
  deleteprojects(project_id:any){
    this.http.delete<any>(`${BASEURL}/user/projects/delete_project/`,project_id)
  }

}

