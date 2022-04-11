import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
@Component({
  selector: 'app-deploy',
  templateUrl: './deploy.component.html',
  styleUrls: ['./deploy.component.scss']
})
export class DeployComponent implements OnInit {

  constructor(public routeService: RouterService) { }

  ngOnInit(): void {
  }

}
