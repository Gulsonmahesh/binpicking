import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class RobotService {

  constructor(private http: HttpClient) { }
  getrobots(){
    return this.http.get<any>( `${BASEURL}/get_admin_robots/0`)
  }
}


