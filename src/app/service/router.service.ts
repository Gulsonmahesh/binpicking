import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(public router: Router) { }

  movetonextpage(page: string) {
    let path = `/${page}`;
    this.router.navigate([path]);
  }
}
