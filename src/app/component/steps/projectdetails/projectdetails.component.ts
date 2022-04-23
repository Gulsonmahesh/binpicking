import { Component, HostListener, OnInit } from '@angular/core';
import { CreateprojectService } from 'src/app/service/createproject.service';
import { RouterService } from '../../../service/router.service';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.scss',],
  
})
export class ProjectdetailsComponent implements OnInit {
  
  model = false;
  @HostListener('document:keyup', ['$event']) closeModel(event: KeyboardEvent) {
    if(this.model && event.key == 'Escape') {
      this.model = false;
    }
  }


  showClosePopup = false;
  openpop(){
    this.showClosePopup = true;
  }
  constructor(public routeService: RouterService,private createprojectservice: CreateprojectService) {

   }
   project_id = "";
   projectName = "";

  ngOnInit(): void {

    this.createprojectservice.getproject_id().subscribe((data:any) => {
    console.log(data)
    this.project_id = data.id+1
    })
  }

  createProjectDetails(){
    console.log(this.project_id,this.projectName)
    const projectdetails = {project_name:this.projectName,description:"3d project",username:"satya",user_id:"1"}
    this.createprojectservice.saveProjectDetails(projectdetails).subscribe((data:any) => {
      if(data.status==="success")
      this.routeService.movetonextpage('robot')
      else
      console.log("error occured",data)
    },
    (error:any)=> {
      console.log(error)
    });
    // this.routeService.movetonextpage('robot')
  }
  showModel(event: any) {
    this.model = event;
  }
}
