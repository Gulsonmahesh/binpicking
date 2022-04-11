import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grippercommonconter',
  templateUrl: './grippercommonconter.component.html',
  styleUrls: ['./grippercommonconter.component.scss']
})
export class GrippercommonconterComponent implements OnInit {
  @Input() model = false;
  isShown: boolean = false ; 
  constructor() { }
  toggleShow() {

    this.isShown = ! this.isShown;
    
    }
  ngOnInit(): void {
  }

}
