import { Component, OnInit,  ViewChild, ElementRef, EventEmitter, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-gripper',
  templateUrl: './add-gripper.component.html',
  styleUrls: ['./add-gripper.component.scss']
})
export class AddGripperComponent implements OnInit {


  @ViewChild('imgfileUpload') imgfileUpload?: ElementRef;
  imageFIle?: any;
  imageFileName = '';
  stlFileName? : any = '';
  stlFile = '';
  @Output() cancelEvent = new EventEmitter();
  @Output() formSubmit = new EventEmitter();

  addGripper = new FormGroup({
    selectrobot: new FormControl('', Validators.required),
    grippername: new FormControl('', Validators.required),
    uploadgripperimage: new FormControl('', Validators.required),
    uploadgripperstl: new FormControl('', Validators.required)
  });


  constructor() { }

  ngOnInit(): void {
  }

  imagefileupload(event: any) {
    this.imageFIle  = event.target.files[0];
    this.imageFileName = event.target.files[0].name;
  }

  onSubmit(event: any) {
    this.formSubmit.emit(event)
  }
  stlfileupload(event: any) {
    this.stlFile  = event.target.files[0];
    this.stlFileName = event.target.files[0].name;
  }
  clearUpload(whichFile: string) {
    if(whichFile ==="image")
      this.imageFIle = this.imageFileName = '';
    else
      this.stlFile = this.stlFileName = '';
  }
  cancelModel() {
    this.cancelEvent.emit('false');
  }

}
