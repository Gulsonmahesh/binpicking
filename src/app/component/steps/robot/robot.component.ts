import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
import { RobotService } from 'src/app/service/robot.service';
@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.scss']
})
export class RobotComponent implements OnInit {
  
  constructor(public routeService: RouterService,private robotservice: RobotService) { }
  
  robotDetails? = [
    {
      robotimg: 'assets/robot.webp', manufacturename: 'Universal Robot',model: 'UR56',
      robotname: 'UR5', reach: '1.3M', payload: '10Kg', selected: false
    },
    {
      robotimg: 'assets/robot.webp', manufacturename: 'Universal Robot', model: 'UR56',
      robotname: 'UR5', reach: '1.3M', payload: '10Kg', selected: false
    },
    {
      robotimg: 'assets/robot.webp', manufacturename: 'Universal Robot', model: 'UR56',
      robotname: 'UR5', reach: '1.3M', payload: '10Kg', selected: false
    },
    {
      robotimg: 'assets/robot.webp', manufacturename: 'Universal Robot', model: 'UR56',
      robotname: 'UR5', reach: '1.3M', payload: '10Kg', selected: false
    },
    {
      robotimg: 'assets/robot.webp', manufacturename: 'Universal Robot', model: 'UR56',
      robotname: 'UR5', reach: '1.3M', payload: '10Kg', selected: false
    }
  ];
  
  ngOnInit(): void {
    this.robotservice.getrobots().subscribe((data:any) => {
    console.log(data)
    })
  }

}
