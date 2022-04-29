import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addrobot',
  templateUrl: './addrobot.component.html',
  styleUrls: ['./addrobot.component.scss']
})
export class AddrobotComponent implements OnInit {
  imageFileName = '';
  stlFileName = '';
  imageFile?: File;
  stlFile?: File;  
  @ViewChild('imgfileUpload') imgfileUpload?:ElementRef;
  @ViewChild('stlfileUpload') stlfileUpload?:ElementRef;
  @Output() cancelEvent = new EventEmitter();
  @Output() formSubmit = new EventEmitter();

  onSubmit(event: any) {
    event.preventDefault();
    // console.log(this.addRobot.value);
    this.formSubmit.emit(this.addRobot.value)
  }

  imagefileupload(event: any) {
    this.imageFileName = event.target.files[0].name;
    this.imageFile = <File>event.target.files[0];
  }

  stlfileupload(event: any) {
    this.stlFileName = event.target.files[0].name;
    this.stlFile = <File>event.target.files[0];
  }
  addRobot = new FormGroup({
    robotName: new FormControl('', Validators.required),
    manufacturename: new FormControl('', Validators.required),
    reach: new FormControl('', Validators.required),
    playload: new FormControl('', Validators.required),
    uploadRobotImage: new FormControl('', Validators.required),
    uploadRobotstl: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  cancelModel() {
    this.cancelEvent.emit('false');
  }

}