import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { GrippingpointsdialogComponent } from './grippingpointsdialog/grippingpointsdialog.component';

@Component({
  selector: 'app-gripper',
  templateUrl: './gripper.component.html',
  styleUrls: ['./gripper.component.scss']
})
export class GripperComponent implements OnInit {
  model = false;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showModel(event: any) {    
    this.dialog.open(GrippingpointsdialogComponent);
  }

}
