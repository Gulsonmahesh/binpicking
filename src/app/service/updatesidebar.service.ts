import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UpdatesidebarService {

  statusArray?:any = ['','','','','','','','','',''];
  
  private _sidebar = new BehaviorSubject<any>(this.statusArray);
  private _sidebar$ = this._sidebar.asObservable();

  getSidebarStatus() {
    return this._sidebar$;
  }

  updateSidebarStatus(index: number, data: string) {    
    this.statusArray[index] = data;
    return this._sidebar.next(this.statusArray);
  }
}
