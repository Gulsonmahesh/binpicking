import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';

@Component({
  selector: 'app-gripperpoints',
  templateUrl: './gripperpoints.component.html',
  styleUrls: ['./gripperpoints.component.scss']
})
export class GripperpointsComponent implements OnInit {
  model = false;
  constructor(public routeService: RouterService) { }

  ngOnInit(): void {
  }

  showModel(event: any) {
    this.model = event;
  }
}
