import { Component, OnInit, Input } from '@angular/core';
declare var StlViewer: any;

@Component({
  selector: 'app-grippercommonconter',
  templateUrl: './grippercommonconter.component.html',
  styleUrls: ['./grippercommonconter.component.scss'],
  // providers: [OrbitControls]
})
export class GrippercommonconterComponent implements OnInit {
  @Input() model = false;
  isShown: boolean = false ; 
  elem?: any;
  renderer?: any;
  controls?: any;
  scene?: any;
  stl_viewer?: any;
  xdegValue?: any;
  ydegValue?: any;
  zdegValue?: any;
  xAxis?: any;
  yAxis?: any;
  zAxis?: any;
  
  constructor() { }
  
  toggleShow() {
    this.isShown = ! this.isShown;    
  }
  
  ngOnInit(): void {    
    // this.stl_viewer=new StlViewer(document.getElementById("model"),
    // {
    //   zoom:380,
    //   models: [ {id:1,filename: "../../assets/stl/peter.stl",color:"#DFFF00", view_edges:true } ]
    // })
  }
}
