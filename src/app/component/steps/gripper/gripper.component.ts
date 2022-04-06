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
    {image: 'assets/Images/educational-robotic-gripper-500x500.jpg', name:'Parallel Finger Gripper' , selected: false}, 
    {image: 'assets/Images/makeblock-robot-gripper.jpg', name:'Three finger Gripper' , selected: true},
    {image: 'assets/Images/images.jpg', name:'Vaccum Gripper' , selected: false},
    {image: 'assets/Images/educational-robotic-gripper-500x500.jpg', name:'Parallel Finger Gripper' , selected: false}, 
    {image: 'assets/Images/makeblock-robot-gripper.jpg', name:'Three finger Gripper' , selected: true},
    {image: 'assets/Images/images.jpg', name:'Vaccum Gripper' , selected: false},
    {image: 'assets/Images/educational-robotic-gripper-500x500.jpg', name:'Parallel Finger Gripper' , selected: false}, 
    {image: 'assets/Images/makeblock-robot-gripper.jpg', name:'Three finger Gripper' , selected: true},
    {image: 'assets/Images/images.jpg', name:'Vaccum Gripper' , selected: false},
    {image: 'assets/Images/educational-robotic-gripper-500x500.jpg', name:'Parallel Finger Gripper' , selected: false}, 
    {image: 'assets/Images/makeblock-robot-gripper.jpg', name:'Three finger Gripper' , selected: true},
    {image: 'assets/Images/images.jpg', name:'Vaccum Gripper' , selected: false}

  ];
  constructor(public routeService: RouterService) { }

  ngOnInit(): void {
  }
}
