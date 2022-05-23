import { Component, OnInit,  ViewChild, ElementRef, EventEmitter, Output, Input} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddgripperService } from 'src/app/service/addgripper.service';

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
  @Output() formUpload = new EventEmitter();
  @Input() isEditForm:any;

  addGripper = new FormGroup({
    id:new FormControl(null),
    grippername: new FormControl('', Validators.required),
    uploadgripperimage: new FormControl('', Validators.required),
    uploadgripperstl: new FormControl('', Validators.required)
  });


  constructor(private addgripperService: AddgripperService) { }

  ngOnInit(): void {
    if(this.isEditForm !==null) {
      this.addGripper.patchValue({
        id: this.isEditForm.id,
        grippername: this.isEditForm.name
      });
      this.imageFileName = this.isEditForm.image
      this.stlFileName = this.isEditForm.stlimage || this.isEditForm.image
    }
  }
 
  createGripper(){
    this.addgripperService.addGripperData(this.addGripper).subscribe((data:any) => {
      console.log(data)
    })

  }

  editGripper(){// here we have to send edited gripper data.
    this.addgripperService.editGripperData(this.addGripper).subscribe((data:any) => {
      console.log(data)
    })

  }

  deleteGripper(){
    const gripper_id = 1
    this.addgripperService.deleteGripperData(gripper_id).subscribe((data:any) => {
      console.log(data)
    })

  }

  imagefileupload(event: any) {
    this.imageFIle  = event.target.files[0];
    this.imageFileName = event.target.files[0].name;
  }

  onSubmit(event: any) {
    this.addGripper?.status === 'VALID' && this.formUpload.emit(this.addGripper)
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
