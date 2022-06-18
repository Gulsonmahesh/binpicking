import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ObjectService } from 'src/app/service/object.service';
import { GrippingposeService } from 'src/app/service/grippingpose.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  showClosePopup = false;
  showdeleteClosePopup=false;
  showdeleteCloseObjectPopup=false;
  openpop() {
    this.showClosePopup = true;
  }
  opendeletepop(){
    this.showdeleteClosePopup = true;
  }
  opendeleteobjectpop(){
    this.showdeleteCloseObjectPopup = true;
  }
  objectvalue:any;
  object = true;
  grippingpoints= false;
  showTip = false;
  @Output() buttonSelected =  new EventEmitter();
  @Output() editButtonSelected = new EventEmitter();
  @Input() addText = '';
 
  constructor( private router: Router,private objectservice: ObjectService,private grippingposeService: GrippingposeService) { }

  ngOnInit(): void {   
  }

  deleteObject(){
    const object_id = 2;
    this.objectservice.deleteObjectDetails(object_id).subscribe((data:any) => {
      if(data.status==="success") {
        this.showdeleteCloseObjectPopup=false;
        // this.routeService.movetonextpage('environment')
      }
      else
      console.log("Error",data)
    },
    (error:any)=> {
      console.log(error)
    });

  }

  enableObject(){
    const object_data = {"object_id":3,"enable_flag":"True"};
    this.objectservice.enableObjectDetails(object_data).subscribe((data:any) => {
      if(data.status==="success") {
        alert("success")
        // this.routeService.movetonextpage('environment')
      }
      else
      console.log("Error",data)
    },
    (error:any)=> {
      console.log(error)
    });
  }
  

  deletePose(){
    const pose_id = 3;
    this.grippingposeService.deletePoseDetails(pose_id).subscribe((data:any) => {
      if(data.status==="success") {
        this.showClosePopup=false;
        // this.routeService.movetonextpage('environment')
      }
      else
      console.log("Error",data)
    },
    (error:any)=> {
      console.log(error)
    });

  }

  enablePose(){
    const pose_data = {"pose_id":3,"enable_flag":"True"};
    this.grippingposeService.enablePoseDetails(pose_data).subscribe((data:any) => {
      if(data.status==="success") {
        alert("success")
        // this.routeService.movetonextpage('environment')
      }
      else
      console.log("Error",data)
    },
    (error:any)=> {
      console.log(error)
    });
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
  openModal() {
    this.buttonSelected.emit(true);
  }
  openEditModal() {
    this.editButtonSelected.emit(true);
  }
}
