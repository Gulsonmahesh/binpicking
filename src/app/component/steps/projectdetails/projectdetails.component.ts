import { Component, HostListener, OnInit } from '@angular/core';
import { CreateprojectService } from 'src/app/service/createproject.service';
import { RouterService } from '../../../service/router.service';
import { UpdatesidebarService } from '../../../service/updatesidebar.service';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.scss',],

})
export class ProjectdetailsComponent implements OnInit {

  model = false;
  userDetails: any = '';
  @HostListener('document:keyup', ['$event']) closeModel(event: KeyboardEvent) {
    if (this.model && event.key == 'Escape') {
      this.model = false;
    }
  }

  showClosePopup = false;
  openpop() {
    this.showClosePopup = true;
  }
  constructor(public routeService: RouterService, private createprojectservice: CreateprojectService,
    private sidebarService: UpdatesidebarService) {
  }
  project_id = "";
  projectName = "";
  projectDescription = '';

  ngOnInit(): void {
    if(sessionStorage.getItem('userdetails')) {
      this.userDetails = sessionStorage.getItem('userdetails')
    }
    // this.createprojectservice.getproject_id().subscribe((data: any) => {
    //   console.log(data)
    //   this.project_id = data.id + 1;
    //   sessionStorage.setItem('project_id', this.project_id);
    // })

  }

  createProjectDetails() {
    console.log(this.project_id, this.projectName);
    const projectdetails = {
      project_name: this.projectName, description: this.projectDescription, 
      username: this.userDetails.username, user_id: this.userDetails.user_id
    }
    
    this.createprojectservice.saveProjectDetails(projectdetails).subscribe((data: any) => {
      if (data.status === "success") {
        this.sidebarService.updateSidebarStatus(0, 'completed');
        this.routeService.movetonextpage('robot');
      }
      else
        console.log("error occured", data)
    },
      (error: any) => {
        console.log(error)
      });
  }
  showModel(event: any) {
    this.model = event;
  }
}
