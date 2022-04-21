import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GrippertcpService {

  constructor(private http: HttpClient) { }
  getgripper(){
    return this.http.get<any>("http://127.0.0.1:8000/get_admin_grippers/"+1)
  }
}
