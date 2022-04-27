import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
import { GripperService } from 'src/app/service/gripper.service';

@Component({
  selector: 'app-gripper',
  templateUrl: './gripper.component.html',
  styleUrls: ['./gripper.component.scss']
})
export class GripperComponent implements OnInit {

  isAdmin = false;
  @Output() buttonSelected =  new EventEmitter();
  model = false;
  gripperDetails: any = [
    {image: 'assets/robot.webp', name:'Parallel Finger Gripper' , selected: false}, 
    {image: 'assets/robot.webp', name:'Vaccum Gripper' , selected: false},
    {image: 'assets/robot.webp', name:'Vaccum Gripper' , selected: false}

  ];
  constructor(public routeService: RouterService,private gripperservice: GripperService) { }

  ngOnInit(): void {
    this.gripperservice.getgrippers().subscribe((data:any) => {
      console.log(data)
    })

    this.isAdmin= sessionStorage.getItem('isAdmin') === 'true' ? true: false;
  }
  openModal() {
    this.buttonSelected.emit(true);
  }
}
