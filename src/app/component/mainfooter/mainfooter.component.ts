import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mainfooter',
  templateUrl: './mainfooter.component.html',
  styleUrls: ['./mainfooter.component.scss']
})
export class MainfooterComponent implements OnInit {

  constructor() { }
  
  @Input() showCancal = true;
  @Input() showdeploy = true;
  @Input() showBack = true;
  @Input() submitname = 'Select and Continue';
  @Input() backname = 'Back';
  @Output() movetonext = new EventEmitter();
  @Output() movetoback = new EventEmitter();

  ngOnInit(): void {
  }
  
}
