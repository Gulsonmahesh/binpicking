import { Component, HostListener, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
import { ObjectService } from 'src/app/service/object.service';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.scss']
})
export class ObjectsComponent implements OnInit {

  imageFIle?: any;
  imageFileName = '';
  model = false;
  selectedFile?: File ;
  objectName = '';
  description = '';
  stlFileName? : any = '';
  stlFile = '';
  objects_details = {};

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
    this.imageFIle  = event.target.files[0];
    this.imageFileName = event.target.files[0].name;
  }
  onFileSelecetd (event: any) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }
  clearUpload(whichFile: string) {
    if(whichFile ==="image")
      this.imageFIle = this.imageFileName = '';
    else
      this.stlFile = this.stlFileName = '';
  }
  getObjectDetails(){
    this.objectservice.getobjects().subscribe((object_data:any) => {
      console.log("object_data",object_data)

    })
  }

  createObject(){
    // const proJectId = sessionStorage.getItem('project_id') ? sessionStorage.getItem('project_id') : 1;
    const proJectId = 1;
    const objectData = new FormData();
    objectData.append('object_file', <File>this.selectedFile, this.selectedFile?.name );
    objectData.append("project_id", <any>proJectId );
    objectData.append("description", <string>this.description );
    objectData.append("object_name", <string>this.objectName );

    console.log("objectData",objectData)

    this.objectservice.objectDetails(objectData).subscribe((data:any) => {
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

  editObject(){
    const proJectId = 1;
    const objectId = 1;
    const editedobjectdata = new FormData();
    editedobjectdata.append("object_id", <any>objectId );
    editedobjectdata.append('object_file', <File>this.selectedFile, this.selectedFile?.name );
    editedobjectdata.append("project_id", <any>proJectId );
    editedobjectdata.append("description", <string>this.description );
    editedobjectdata.append("object_name", <string>this.objectName );

    this.objectservice.editObjectDetails(editedobjectdata).subscribe((data:any) => {
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
    const enableobjectdata = {object_id:1,status:"True"}
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
  
  showModel(event: any) {
    this.model = event;
  }

}

