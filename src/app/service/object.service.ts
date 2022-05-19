import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  constructor(private http: HttpClient) { }
  getobjects(){
    return this.http.get<any>(`${BASEURL}/objects/0/2`)
  }
  objectDetails(objectdata:any){
    return this.http.post<any>(`${BASEURL}/objects`,objectdata)
  }
  editObjectDetails(editedobjectdata:any){
    return this.http.put<any>(`${BASEURL}/objects/editobject/1`,editedobjectdata)
  }
  deleteObjectDetails(objectId:any){
    return this.http.delete<any>(`${BASEURL}/objects/deleteobject/`+objectId)
  }
  enableObjectDetails(enableobjectdata:any){
    return this.http.put<any>(`${BASEURL}/objects/enableobject`,enableobjectdata)
  }
}
