import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainfooter',
  templateUrl: './mainfooter.component.html',
  styleUrls: ['./mainfooter.component.scss']
})
export class MainfooterComponent implements OnInit {

  constructor() { }
  
  @Input() showCancal = true;
  @Input() showBack = true;

  ngOnInit(): void {
  }

}
