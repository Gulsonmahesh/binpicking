import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.scss']
})
export class EnvironmentComponent implements OnInit {

  constructor(public routeService: RouterService) { }

  ngOnInit(): void {
  }

}
