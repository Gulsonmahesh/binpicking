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
    project_id:new FormControl(sessionStorage.getItem("project_id")?sessionStorage.getItem("project_id"):1),
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
    const project_id = sessionStorage.getItem("project_id")
    this.getObjectDetails(0,2)
  }

  imagefileupload(event: any) {
    this.imageFile  = event.target.files[0];
    this.imageFileName = event.target.files[0].name;
    this.addObject.patchValue({object_name: this.imageFileName});
  }
  clearUpload(whichFile: string) {
    this.imageFile = this.imageFileName = '';
  }
  getObjectDetails(object_id:any,project_id:any){
    this.objectservice.getobjects(object_id,project_id).subscribe((object_data:any) => {
      console.log("object_data",object_data)
    })
  }

  // createObject(){
  //   // const grippertcpdata = {admin_robot_id:1,
  //   //   admin_gripper_id:1,project_id:0,tcp_list:[1,2,3,4,5,6],invariance_axis:"False",invariance_lower_limit:0,invariance_upper_limit:0,stages_number:0,invariance_flag:"False"}
  //   const objectdata = this.addObject
  //   this.objectservice.createObjectDetails(objectdata).subscribe((data:any) => {
  //     if(data.status==="success")
  //     this.routeService.movetonextpage('object')
  //     else
  //     console.log("error occured",data)
  //   },
  //   (error:any)=> {
  //     console.log(error)
  //   });
  // }

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
      let newobjectData:FormData = new FormData();
      newobjectData.append('objectName', this.addObject.value.objectName);
      newobjectData.append('object_name', this.addObject.value.object_name);
      newobjectData.append('description', this.addObject.value.description);
      newobjectData.append('object_file', this.addObject.value.object_file);
      newobjectData.append('project_id', this.addObject.value.project_id);
      this.objectservice.objectDetails(newobjectData).subscribe((data:any) => {
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
      // this.addObject.patchValue({object_id: 1, objectName: 'Object 1'});
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

