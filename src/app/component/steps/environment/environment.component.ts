import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
import { EnvironmentService } from 'src/app/service/environment.service';
@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.scss']
})
export class EnvironmentComponent implements OnInit {

 
  constructor(public routeService: RouterService,private environmentservice: EnvironmentService) { }


  ngOnInit(): void {
    this.environmentservice.getenvironmentdetails().subscribe((data:any) => {
      console.log(data)
    })
  }

}
