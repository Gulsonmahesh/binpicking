import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gripper',
  templateUrl: './gripper.component.html',
  styleUrls: ['./gripper.component.scss']
})
export class GripperComponent implements OnInit {
  model = false;
  constructor() { }

  ngOnInit(): void {
  }

  showModel(event: any) {    
    this.model = event;
  }

}
