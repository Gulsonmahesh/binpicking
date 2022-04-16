import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';

@Component({
  selector: 'app-executebin',
  templateUrl: './executebin.component.html',
  styleUrls: ['./executebin.component.scss']
})
export class ExecutebinComponent implements OnInit {

  constructor(public routeService: RouterService) { }

  ngOnInit(): void {
  }

}
