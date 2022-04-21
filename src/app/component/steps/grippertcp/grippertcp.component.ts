import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
import { GrippertcpService } from 'src/app/service/grippertcp.service';
@Component({
  selector: 'app-grippertcp',
  templateUrl: './grippertcp.component.html',
  styleUrls: ['./grippertcp.component.scss']
})
export class GrippertcpComponent implements OnInit {
  
  constructor(public routeService: RouterService,private grippertcpservice: GrippertcpService) { }

  ngOnInit(): void {
    this.grippertcpservice.getgripper().subscribe((data:any) => {
      console.log(data)
  })
}

}
