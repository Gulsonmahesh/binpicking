import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  constructor(private http: HttpClient) { }
  getobjects(object_id:any,project_id:any){
    return this.http.get<any>(`${BASEURL}/user/projects/objects/`+object_id+'/'+project_id)
  }
  objectDetails(objectdata:any){
    return this.http.post<any>(`${BASEURL}/user/projects/objects/create_object`,objectdata)
  }
  editObjectDetails(editedobjectdata:any){
    return this.http.put<any>(`${BASEURL}/user/projects/objects/edit_object/1`,editedobjectdata)
  }
  deleteObjectDetails(objectId:any){
    return this.http.delete<any>(`${BASEURL}/user/projects/objects/delete_object/`+objectId)
  }
  enableObjectDetails(enableobjectdata:any){
    return this.http.put<any>(`${BASEURL}/user/projects/objects/enable_object`,enableobjectdata)
  }
}
