import { Component, HostListener, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
import { ObjectService } from 'src/app/service/object.service';
import { Validation } from '../../../constant';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.scss']
})
export class ObjectsComponent implements OnInit {

  model = false; 
  imageFile = ''
  imageFileName = ''; 
  modelTitle = '';
  mode = '';

  addObject = new FormGroup({
    project_id:new FormControl(null),
    objectName: new FormControl('', Validators.required),
    description: new FormControl(''),
    object_name: new FormControl(''),
    object_file: new FormControl('', Validators.required),
  });
  
  @HostListener('document:keyup', ['$event']) closeModel(event: KeyboardEvent) {
    if(this.model && event.key == 'Escape') {
      this.model = false;
    }
  }
  constructor(public routeService: RouterService,private objectservice: ObjectService) { }

  ngOnInit(): void {
    this.getObjectDetails()
  }

  imagefileupload(event: any) {
    this.imageFile  = event.target.files[0];
    this.imageFileName = event.target.files[0].name;
    this.addObject.patchValue({object_name: this.imageFileName});
  }
  clearUpload(whichFile: string) {
    this.imageFile = this.imageFileName = '';    
  }
  getObjectDetails(){
    this.objectservice.getobjects().subscribe((object_data:any) => {
      console.log("object_data",object_data)
    })
  }
  
  deleteObject(){
    const object_id = 1;
    this.objectservice.deleteObjectDetails(object_id).subscribe((data:any) => {
      if(data.status==="success") {
        this.model=false;
        // this.routeService.movetonextpage('environment')
      }
      else
      console.log("Error",data)
    },
    (error:any)=> {
      console.log(error)
    });

  }

  enableObject(){
    const enableobjectdata = {object_id:2,enable_flag:"True"}
    this.objectservice.enableObjectDetails(enableobjectdata).subscribe((data:any) => {
      if(data.status==="success") {
        this.model=false;
        // this.routeService.movetonextpage('environment')
      }
      else
      console.log("Error",data)
    },
    (error:any)=> {
      console.log(error)
    });

  }
  
  showModel(type: string = 'add') {
    this.mode = type;
    if(type === 'edit') {
      this.addObject.patchValue({object_id: 1, objectName: 'Object 1'});      
      this.modelTitle = "Edit Object";
    } else {
      this.addObject.patchValue({object_id: 2, objectName: ''});      
      this.modelTitle = "Add New Object";
    }
    this.model = !this.model;    
  }

  onSubmit(events: any) {
    event?.preventDefault();
    console.log(this.addObject.value)
    if(this.mode !== 'edit') {
      this.addObject.patchValue({object_id: 2});
      this.objectservice.objectDetails(this.addObject.value).subscribe((data:any) => {
        if(data.status==="success") {
          this.model=false;
          this.mode = '';
        }
        else
        console.log("Error",data)
      },
      (error:any)=> {
        console.log(error)
      });
    } else {
      this.addObject.patchValue({object_id: 1, objectName: 'Object 1'});      
      this.objectservice.editObjectDetails(this.addObject.value).subscribe((data:any) => {
        if(data.status==="success") {
          this.model=false;
          this.mode = '';
          // this.routeService.movetonextpage('environment')
        }
        else
        console.log("Error",data)
      },
      (error:any)=> {
        console.log(error)
      });
    }
  }
}

