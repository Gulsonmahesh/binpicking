import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-gripper',
  templateUrl: './add-gripper.component.html',
  styleUrls: ['./add-gripper.component.scss']
})
export class AddGripperComponent implements OnInit {

  addGripper = new FormGroup({
    selectrobot: new FormControl('', Validators.required),
    grippername: new FormControl('', Validators.required),
    uploadgripperimage: new FormControl('', Validators.required),
    uploadgripperstl: new FormControl('', Validators.required)
  });


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event: any) {

  }

}
