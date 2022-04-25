import { Component, HostListener, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  constructor() { }
  @Output() closeModelEmit = new EventEmitter();
  @Input() headertitle = '';
  @Input() customclass = '';
  @Input() showHeader = true
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
