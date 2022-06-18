import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BASEURL } from '../constant';
@Injectable({
  providedIn: 'root'
})
export class DeployService {

  constructor(private http: HttpClient) { }

  getScannerConnect = (scannerIp: any) => {
    return this.http.get<any>(`${BASEURL}/getScnnerconnect/${scannerIp}`)
  }

  getRobotConnect = (robotIp: any) => {
    return this.http.get<any>(`${BASEURL}/getScnnerconnect/${robotIp}`)
  }

}
