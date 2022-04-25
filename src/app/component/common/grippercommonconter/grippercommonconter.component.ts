import { Component, OnInit, Input } from '@angular/core';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
// import Stats from 'three/examples/jsm/libs/stats.module';

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

  constructor() { }
  
  toggleShow() {
    this.isShown = ! this.isShown;    
  }
  
  ngOnInit(): void {    
  }

}
