import { Component, HostListener, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  constructor() { }
  @Output() closeModelEmit = new EventEmitter();

  ngOnInit(): void {
  }
  
  closeModelclick() {
    this.closeModelEmit.emit(false);
  }

  @HostListener('document:keyup', ['$event']) closeModel(event: KeyboardEvent) {
    if(event.key == 'Escape') {
      this.closeModelclick();
    }
  }
}
