import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  loginDetails(logindetails:any){
    return this.http.post<any>(`${BASEURL}/login`,logindetails)
  }
}
