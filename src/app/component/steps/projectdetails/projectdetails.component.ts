import { Component, OnInit } from '@angular/core';
import { RouterService } from '../../../service/router.service';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.scss',],
  
})
export class ProjectdetailsComponent implements OnInit {

  constructor(public routeService: RouterService) { }

  ngOnInit(): void {
  }

}
