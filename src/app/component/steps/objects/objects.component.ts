import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.scss']
})
export class ObjectsComponent implements OnInit {
  model = false;

  @HostListener('document:keyup', ['$event']) closeModel(event: KeyboardEvent) {
    if(this.model && event.key == 'Escape') {
      this.model = false;
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }
  
  showModel(event: any) {
    this.model = event;
  }

}
