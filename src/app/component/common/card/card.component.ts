import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Output() buttonSelected =  new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    this.buttonSelected.emit(true);
  }
}
