import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showTip = false;
  showTip1=false;
  showTip2=false;
  constructor( private router: Router) { }
  
  ngOnInit(): void {
  }
  
  back(){
    this.router.navigate(['/projectsummary']);
  }
  
  onloginpage(){
    this.router.navigate(['/projectsummary']);
  }
  onlogoutpage(){
    this.router.navigate(['/loginpage']);
  }
 
}
