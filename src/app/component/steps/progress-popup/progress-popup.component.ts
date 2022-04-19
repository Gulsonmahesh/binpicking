import { Component, HostListener, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';

@Component({
  selector: 'app-progress-popup',
  templateUrl: './progress-popup.component.html',
  styleUrls: ['./progress-popup.component.scss']
})
export class ProgressPopupComponent implements OnInit {

  model = false;

  @HostListener('document:keyup', ['$event']) closeModel(event: KeyboardEvent) {
    if(this.model && event.key == 'Escape') {
      this.model = false;
    }
  }

  constructor(public routeService: RouterService) { }

  ngOnInit(): void {
  }
  showModel(event: any) {
    this.model = event;
  }
}
