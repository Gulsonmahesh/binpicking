import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  showTip = false;
  @Output() buttonSelected =  new EventEmitter();
  @Input() addText = '';
  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    this.buttonSelected.emit(true);
  }
}
