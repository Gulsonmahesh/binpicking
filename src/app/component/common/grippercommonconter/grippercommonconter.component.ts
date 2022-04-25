import { Component, OnInit, Input } from '@angular/core';
import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import Stats from 'three/examples/jsm/libs/stats.module';

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
  STLViewer(model: any, elementID:string) {
   this.elem =  document.getElementById(elementID);
   console.log(this.elem)
   const camera = new THREE.PerspectiveCamera(75, this.elem.clientWidth/this.elem.clientHeight, 0.1, 1000);
   this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
   this.renderer.setSize(this.elem.clientWidth, this.elem.clientHeight);
   console.log(this.renderer.domElement);   
   this.elem.appendChild(this.renderer.domElement);
   const scene = new THREE.Scene();
   scene.add(new THREE.AxesHelper(5));
  //  const light = new THREE.SpotLight()
  //  light.position.set(20, 20, 20)
  //  this.scene.add(light);
   camera.position.z = 3;
  //  this.controls = new OrbitControls(camera, this.renderer.domElement)
  //  this.controls.enableDamping = true;   
  const material = new THREE.MeshPhysicalMaterial({
    color: 0xb2ffc8,
    metalness: 0.25,
    roughness: 0.1,
    opacity: 1.0,
    transparent: true,
    transmission: 0.99,
    clearcoat: 1.0,
    clearcoatRoughness: 0.25
  })
  const that = this;
  const loader = new STLLoader()
  loader.load(model, function (geometry) {
    const mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
      console.log(error)
    });
  }
  ngOnInit(): void {
    this.STLViewer("./assets/stl/peter.stl", "model");
  }

}
