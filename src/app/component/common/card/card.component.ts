import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  showClosePopup = false;
  openpop() {
    this.showClosePopup = true;
  }
  objectvalue:any;
  object = true;
  grippingpoints= false;
  showTip = false;
  @Output() buttonSelected =  new EventEmitter();
  @Input() addText = '';
 
  constructor( private router: Router) { }

  ngOnInit(): void {
    
   
  }
  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
  openModal() {
    this.buttonSelected.emit(true);
  }
}
