import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddrobotService } from 'src/app/service/addrobot.service';

@Component({
  selector: 'app-addrobot',
  templateUrl: './addrobot.component.html',
  styleUrls: ['./addrobot.component.scss']
})
export class AddrobotComponent implements OnInit {
  imageFileName: any = '';
  stlFileName: any = '';
  imageFile?: any;
  stlFile?: any;
  @ViewChild('imgfileUpload') imgfileUpload?:ElementRef;
  @ViewChild('stlfileUpload') stlfileUpload?:ElementRef;
  @Output() cancelEvent = new EventEmitter();
  @Output() formSubmit = new EventEmitter();
  @Input() isEditForm:any;
  @Input() robotId:any;
  @Input() isEdit = false;

  addRobot = new FormGroup({
    robotId: new FormControl(''),
    robotName: new FormControl('', Validators.required),
    manufacturename: new FormControl('', Validators.required),
    reach: new FormControl('', Validators.required),
    playload: new FormControl('', Validators.required),
    uploadRobotImage: new FormControl(''),
    uploadRobotstl: new FormControl('')
  });

  onSubmit(event: any) {
    event.preventDefault();
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

  constructor(private addrobotservice: AddrobotService ) { }

  ngOnInit(): void {
    console.log('Selected Robot', this.isEditForm);
    if(this.isEditForm !== null && this.isEdit) {
      this.addRobot.patchValue({
        robotId: this.isEditForm.id,
        robotName: this.isEditForm.robotname || this.isEditForm.robotName,
        manufacturename: this.isEditForm.manufacturename,
        reach: this.isEditForm.reach,
        playload: this.isEditForm.payload
      })
      this.imageFileName = this.isEditForm.robotimg;
      this.stlFileName = this.isEditForm.robotimg;
    }
    else {
      this.addRobot.patchValue({robotId: this.robotId});
    }
  }

  createRobot(){
    const isEdit = (this.isEditForm !== null) ? true : false;
    this.formSubmit.emit([this.addRobot.value,isEdit]);
    // this.addrobotservice.addRobotData(this.addRobot).subscribe((data:any) => {
    //   console.log(data)
    // })
  }

  editRobot(){// here we have to send edit robot data
    // this.addrobotservice.editRobotData(this.addRobot).subscribe((data:any) => {
    //   console.log(data)
    // })
  }

  deleteRobot(){
    const robot_id = 1;
    // this.addrobotservice.deleteRobot(robot_id).subscribe((data:any) => {
    //   console.log(data)
    // })
  }

  cancelModel() {
    this.cancelEvent.emit('false');
  }

  clearUpload(whichFile: string) {
    if(whichFile ==="image")
      this.imageFile = this.imageFileName = '';
    else
      this.stlFileName = this.stlFile = '';
  }

}
