import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RobotService {

  constructor(private http: HttpClient) { }
  getrobots(){
    return this.http.get<any>("http://127.0.0.1:8000/get_admin_robots/"+0)
  }
}


