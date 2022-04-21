import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor(private http: HttpClient) { }
  getenvironmentdetails(){
    return this.http.get<any>("http://127.0.0.1:8000/master_environment/"+0+'/'+19)
  }
  environmentDetails(master_environment_data:any){
    return this.http.post<any>("http://127.0.0.1:8000/master_environment",master_environment_data)
  }
}
