import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';

@Component({
  selector: 'app-gripper',
  templateUrl: './gripper.component.html',
  styleUrls: ['./gripper.component.scss']
})
export class GripperComponent implements OnInit {
  model = false;
  gripperDetails: any = [
    {image: 'assets/robot.webp', name:'Parallel Finger Gripper' , selected: false}, 
    {image: 'assets/robot.webp', name:'Three finger Gripper' , selected: true},
    {image: 'assets/Images/images.jpg', name:'Vaccum Gripper' , selected: false},
    {image: 'assets/robot.webp', name:'Parallel Finger Gripper' , selected: false}, 
    {image: 'assets/robot.webp', name:'Three finger Gripper' , selected: true},
    {image: 'assets/Images/images.jpg', name:'Vaccum Gripper' , selected: false},
    {image: 'assets/robot.webp', name:'Parallel Finger Gripper' , selected: false}, 
    {image: 'assets/robot.webp', name:'Three finger Gripper' , selected: true},
    {image: 'assets/Images/images.jpg', name:'Vaccum Gripper' , selected: false},
    {image: 'assets/robot.webp', name:'Parallel Finger Gripper' , selected: false}, 
    {image: 'assets/robot.webp', name:'Three finger Gripper' , selected: true},
    {image: 'assets/Images/images.jpg', name:'Vaccum Gripper' , selected: false}

  ];
  constructor(public routeService: RouterService) { }

  ngOnInit(): void {
  }
}
