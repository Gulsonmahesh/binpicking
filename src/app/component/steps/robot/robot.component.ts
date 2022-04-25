import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
import { RobotService } from 'src/app/service/robot.service';
import { RobotDetailsComponent } from '../../common/robot-details/robot-details.component';
@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.scss']
})
export class RobotComponent implements OnInit {
  

  isAdmin = false;
  constructor(public routeService: RouterService,private robotservice: RobotService) { }
  
  robotDetails? = [
    // {
    //   robotimg: 'assets/robot.webp', manufacturename: 'Universal Robot',model: 'UR56',
    //   robotname: 'UR5', reach: '1.3M', payload: '10Kg', selected: false
    // },
    // {
    //   robotimg: 'assets/robot.webp', manufacturename: 'Universal Robot', model: 'UR56',
    //   robotname: 'UR5', reach: '1.3M', payload: '10Kg', selected: false
    // },
    // {
    //   robotimg: 'assets/robot.webp', manufacturename: 'Universal Robot', model: 'UR56',
    //   robotname: 'UR5', reach: '1.3M', payload: '10Kg', selected: false
    // },
    // {
    //   robotimg: 'assets/robot.webp', manufacturename: 'Universal Robot', model: 'UR56',
    //   robotname: 'UR5', reach: '1.3M', payload: '10Kg', selected: false
    // },
    // {
    //   robotimg: 'assets/robot.webp', manufacturename: 'Universal Robot', model: 'UR56',
    //   robotname: 'UR5', reach: '1.3M', payload: '10Kg', selected: false
    // }
  ];
  
  ngOnInit(): void {
    this.robotservice.getrobots().subscribe((data:any) => {
    // console.log(data)
    this.robotDetails=data
    console.log(this.robotDetails)
    })

    this.isAdmin= sessionStorage.getItem('isAdmin') === 'true' ? true: false;
  }

}
