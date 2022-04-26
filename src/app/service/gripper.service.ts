import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class GripperService {

  constructor(private http: HttpClient) { }
  getgrippers(){
    return this.http.get<any>(`${BASEURL}/grippers_with_robot_id/1/0`)
  }
}
