import { Component, HostListener, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
import { ObjectService } from 'src/app/service/object.service';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.scss']
})
export class ObjectsComponent implements OnInit {
  model = false;
  selectedFile?: File ;
  objectName = '';
  description = '';

  @HostListener('document:keyup', ['$event']) closeModel(event: KeyboardEvent) {
    if(this.model && event.key == 'Escape') {
      this.model = false;
    }
  }
  
  constructor(public routeService: RouterService,private objectservice: ObjectService) { }

  ngOnInit(): void {
    this.objectservice.getobjects().subscribe((data:any) => {
      console.log(data)
    })
  }

  onFileSelecetd (event: any) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }

  createObject(){
    const proJectId = sessionStorage.getItem('project_id') ? sessionStorage.getItem('project_id') : 1;
    const objectData = new FormData();
    objectData.append('object_file', <File>this.selectedFile, this.selectedFile?.name );
    objectData.append("project_id", <string>proJectId );
    objectData.append("description", <string>this.description );
    objectData.append("object_name", <string>this.objectName );


    this.objectservice.objectDetails(objectData).subscribe((data:any) => {
      if(data.status==="success") {
        this.model=false;
        this.routeService.movetonextpage('environment')
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

