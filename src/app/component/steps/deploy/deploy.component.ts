import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
import { DeployService } from 'src/app/service/deploy.service';
@Component({
  selector: 'app-deploy',
  templateUrl: './deploy.component.html',
  styleUrls: ['./deploy.component.scss']
})
export class DeployComponent implements OnInit {

  constructor(public routeService: RouterService,private deployservice: DeployService) { }

  ngOnInit(): void {
  }

  deployProject(){
    const project_id=3
    this.deployservice.deployProject(project_id).subscribe((data:any) => {
      console.log(data)
    });
  }

}
