import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-robotdetails',
  templateUrl: './robotdetails.component.html',
  styleUrls: ['./robotdetails.component.scss']
})
export class RobotdetailsComponent implements OnInit {

  @Input() details: any = '';

  constructor() { }

  ngOnInit(): void {
  }

}
