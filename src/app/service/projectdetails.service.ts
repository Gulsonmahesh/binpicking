import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class ProjectdetailsService {

  constructor(private http: HttpClient) { }

  getprojects(){
    return this.http.get<any>( `${BASEURL}/user/projects/0`)
  }

  deleteProjectDetails(projectId:any){
    return this.http.delete<any>(`${BASEURL}/user/projects/delete_project/`+projectId)
  }
}
