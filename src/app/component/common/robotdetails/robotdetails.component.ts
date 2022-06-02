import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-robotdetails',
  templateUrl: './robotdetails.component.html',
  styleUrls: ['./robotdetails.component.scss']
})


export class RobotdetailsComponent implements OnInit {

  @Input() details: any = '';
  isAdmin=false;
  @Output() onSelect =  new EventEmitter();
  @Output() OpenGripper = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.isAdmin= sessionStorage.getItem('isAdmin') === 'true' ? true: false;
  }

  robotSelected() {
    this.onSelect.emit(this.details)
  }
  emitOpenGripper = () => {
    this.OpenGripper.emit(this.details);
  }

}
