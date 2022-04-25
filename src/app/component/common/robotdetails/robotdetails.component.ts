import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-robotdetails',
  templateUrl: './robotdetails.component.html',
  styleUrls: ['./robotdetails.component.scss']
})


export class RobotdetailsComponent implements OnInit {

  @Input() details: any = '';
  isAdmin=false;
  constructor() { }

  ngOnInit(): void {
    this.isAdmin= sessionStorage.getItem('isAdmin') === 'true' ? true: false;
  }

}
