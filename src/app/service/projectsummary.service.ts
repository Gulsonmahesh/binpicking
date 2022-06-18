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

}

