import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';

@Component({
  selector: 'app-executebin',
  templateUrl: './executebin.component.html',
  styleUrls: ['./executebin.component.scss']
})
export class ExecutebinComponent implements OnInit {
  grayrestart= true;
  bluerestart=false;

  grayexit=true;
  whiteexit=false;

  graystop=false;
  bluestop= true;

  bluearrow=false;
  grayarrow=true;

  constructor(public routeService: RouterService) { }

  ngOnInit(): void {
  }

  openstop(){
    this.whiteexit=true;
    this.grayexit=false;
    this.bluerestart=true;
    this.grayrestart=false;
    this.bluestop=false;
    this.graystop=true;
    this.bluearrow=true;
    this.grayarrow=false;
  }
  openrestart(){
    this.grayexit=true;
    this.whiteexit=false;
    this.grayrestart=true;
    this.bluerestart=false;
    this.graystop=false;
    this.bluestop=true;
    this.bluearrow=false;
    this.grayarrow=true;
  }

}
