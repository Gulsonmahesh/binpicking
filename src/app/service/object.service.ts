import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  constructor(private http: HttpClient) { }
  getobjects(){
    return this.http.get<any>("http://127.0.0.1:8000/objects/"+0+'/'+19)
  }
  objectDetails(objectdata:any){
    return this.http.post<any>("http://127.0.0.1:8000/objects",objectdata)
  }
}
