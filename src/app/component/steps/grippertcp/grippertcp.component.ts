import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
@Component({
  selector: 'app-grippertcp',
  templateUrl: './grippertcp.component.html',
  styleUrls: ['./grippertcp.component.scss']
})
export class GrippertcpComponent implements OnInit {
  
  constructor(public routeService: RouterService) { }

  ngOnInit(): void {
  }

}
