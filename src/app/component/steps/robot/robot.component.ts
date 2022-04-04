import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.scss']
})
export class RobotComponent implements OnInit {
  
  constructor(public routeService: RouterService) { }
  
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
  }

}
